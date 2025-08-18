import React, { useState, useEffect } from "react";
import {
  Card,
  Row,
  Col,
  Statistic,
  List,
  Avatar,
  Spin,
  Switch,
  Tag,
  Layout,
  ConfigProvider,
  message,
  Button,
  Empty,
} from "antd";
import {
  UserOutlined,
  TeamOutlined,
  HomeOutlined,
  DollarOutlined,
  NotificationOutlined,
  BulbOutlined,
  BulbFilled,
  ArrowUpOutlined,
  ArrowDownOutlined,
  ReloadOutlined,
} from "@ant-design/icons";
import {
  AreaChart,
  Area,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const { Header, Content } = Layout;

const DashboardOverview = () => {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Get current month in YYYY-MM format
  const getCurrentMonth = () => {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, "0");
    return `${year}-${month}`;
  };

  const fetchDashboardData = async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/dashboard-stats`
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      // Generate fake monthly trend data
      const months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ];
      const currentMonthIndex = new Date().getMonth();

      const chartData = months.map((month, index) => ({
        name: month,
        revenue:
          index <= currentMonthIndex
            ? Math.round(
                ((data.overview.totalRevenue * (index + 1)) / 12) *
                  (0.9 + Math.random() * 0.2)
              )
            : 0,
        users:
          index <= currentMonthIndex
            ? Math.round(
                ((data.overview.users * (index + 1)) / 12) *
                  (0.9 + Math.random() * 0.2)
              )
            : 0,
      }));

      // Adjust last month values to match totals exactly
      if (chartData[currentMonthIndex]) {
        chartData[currentMonthIndex].revenue =
          data.overview.totalRevenue -
          chartData
            .slice(0, currentMonthIndex)
            .reduce((sum, m) => sum + m.revenue, 0);
        chartData[currentMonthIndex].users =
          data.overview.users -
          chartData
            .slice(0, currentMonthIndex)
            .reduce((sum, m) => sum + m.users, 0);
      }

      // Filter payments to show only current month
      const currentMonth = getCurrentMonth();
      const currentMonthPayments = data.recentActivities.payments.filter(
        (payment) => payment.month === currentMonth
      );

      setStats({
        ...data,
        chartData,
        recentActivities: {
          ...data.recentActivities,
          currentMonthPayments,
        },
      });
    } catch (err) {
      console.error("Dashboard data fetch error:", err);
      setError(err.message);
      message.error("Failed to load dashboard data");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDashboardData();
  }, []);

  if (loading && !stats) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Spin size="large" tip="Loading Dashboard..." />
      </div>
    );
  }

  if (error || !stats) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          flexDirection: "column",
          gap: 16,
        }}
      >
        <Empty
          image={Empty.PRESENTED_IMAGE_SIMPLE}
          description={
            <span style={{ fontSize: 16 }}>
              {error || "Failed to load dashboard data"}
            </span>
          }
        />
        <Button
          type="primary"
          icon={<ReloadOutlined />}
          onClick={fetchDashboardData}
        >
          Retry
        </Button>
      </div>
    );
  }

  const statCards = [
    {
      title: "Total Users",
      value: stats.overview.users,
      icon: <UserOutlined />,
      change: 8,
    },
    {
      title: "Total Members",
      value: stats.overview.members,
      icon: <TeamOutlined />,
      change: 12,
    },
    {
      title: "Available Apartments",
      value: stats.overview.availableApartments,
      icon: <HomeOutlined />,
      change: -3,
    },
    {
      title: "Total Revenue",
      value: stats.overview.totalRevenue,
      icon: <DollarOutlined />,
      change: 18,
      isMoney: true,
    },
  ];

  const agreementStatusData = [
    { name: "Accepted", value: stats.agreements.accepted, color: "#52c41a" },
    { name: "Pending", value: stats.agreements.pending, color: "#faad14" },
    { name: "Rejected", value: stats.agreements.rejected, color: "#f5222d" },
  ];

  return (
    <ConfigProvider>
      <Layout>
        {/* Header */}

        {/* Content */}
        <Content style={{ padding: 24 }}>
          {/* Stats Cards */}
          <Row gutter={[16, 16]} style={{ marginBottom: 24 }}>
            {statCards.map((item, index) => (
              <Col xs={24} sm={12} lg={6} key={index}>
                <Card loading={loading} bordered>
                  <Statistic
                    title={item.title}
                    value={item.value}
                    prefix={item.icon}
                    precision={item.isMoney ? 2 : 0}
                    formatter={
                      item.isMoney ? (value) => `$${value}` : undefined
                    }
                  />
                  <div
                    style={{
                      marginTop: 8,
                      color: item.change > 0 ? "#52c41a" : "#f5222d",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    {item.change > 0 ? (
                      <ArrowUpOutlined />
                    ) : (
                      <ArrowDownOutlined />
                    )}
                    <span style={{ marginLeft: 4 }}>
                      {Math.abs(item.change)}% vs last month
                    </span>
                  </div>
                </Card>
              </Col>
            ))}
          </Row>

          {/* Charts */}
          <Row gutter={[16, 16]} style={{ marginBottom: 24 }}>
            <Col xs={24} lg={16}>
              <Card
                title="Monthly Performance"
                loading={loading}
                extra={<Tag color="processing">Current Year</Tag>}
              >
                <ResponsiveContainer width="100%" height={300}>
                  <AreaChart data={stats.chartData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis yAxisId="left" orientation="left" />
                    <YAxis yAxisId="right" orientation="right" />
                    <Tooltip
                      formatter={(value, name) => [
                        name === "revenue"
                          ? `$${value.toLocaleString()}`
                          : value.toLocaleString(),
                        name === "revenue" ? "Revenue" : "Users",
                      ]}
                    />
                    <Legend />
                    <Area
                      yAxisId="left"
                      type="monotone"
                      dataKey="revenue"
                      name="Revenue"
                      stroke="#8884d8"
                      fill="#8884d8"
                    />
                    <Area
                      yAxisId="right"
                      type="monotone"
                      dataKey="users"
                      name="Users"
                      stroke="#82ca9d"
                      fill="#82ca9d"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </Card>
            </Col>
            <Col xs={24} lg={8}>
              <Card title="Agreement Status" loading={loading}>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={agreementStatusData}
                      cx="50%"
                      cy="50%"
                      outerRadius={80}
                      dataKey="value"
                      label={({ name, percent }) =>
                        `${name}: ${(percent * 100).toFixed(0)}%`
                      }
                    >
                      {agreementStatusData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip formatter={(value) => [`${value} agreements`]} />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </Card>
            </Col>
          </Row>

          {/* Recent Activities */}
          <Row gutter={[16, 16]}>
            <Col xs={24} lg={12}>
              <Card
                title="Recent Announcements"
                loading={loading}
                extra={
                  <Tag>{stats.recentActivities.announcements.length} total</Tag>
                }
              >
                <List
                  itemLayout="horizontal"
                  dataSource={stats.recentActivities.announcements}
                  locale={{ emptyText: "No announcements" }}
                  renderItem={(item) => (
                    <List.Item>
                      <List.Item.Meta
                        avatar={<Avatar icon={<NotificationOutlined />} />}
                        title={item.title}
                        description={new Date(item.date).toLocaleString()}
                      />
                    </List.Item>
                  )}
                />
              </Card>
            </Col>
            <Col xs={24} lg={12}>
              <Card
                title={`Current Month Payments (${getCurrentMonth()})`}
                loading={loading}
                extra={
                  <Tag color="success">
                    {stats.recentActivities.currentMonthPayments.length}{" "}
                    payments
                  </Tag>
                }
              >
                <List
                  itemLayout="horizontal"
                  dataSource={stats.recentActivities.currentMonthPayments}
                  locale={{ emptyText: "No payments this month" }}
                  renderItem={(item) => (
                    <List.Item>
                      <List.Item.Meta
                        avatar={<Avatar icon={<DollarOutlined />} />}
                        title={`Rent: ৳${Number(
                          item.rent || 0
                        ).toLocaleString()} | ${item.month}`}
                        description={
                          <>
                            <div>Email: {item.email}</div>
                            <div>
                              Room: {item.block}
                              {item.floor}
                              {item.room}
                            </div>
                            <div>Transaction: {item.transactionId}</div>
                            <div>
                              Date: {new Date(item.date).toLocaleString()}
                              {item.coupon ? ` | Coupon: ${item.coupon}` : ""}
                            </div>
                          </>
                        }
                      />
                    </List.Item>
                  )}
                />
              </Card>
            </Col>
          </Row>
        </Content>
      </Layout>
    </ConfigProvider>
  );
};

export default DashboardOverview;
