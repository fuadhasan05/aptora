import Card from "../../components/Apartments/Card";
import CardList from "../../components/Apartments/CardList";
import Container from "../../components/Shared/Container";
import { useLoaderData } from "react-router";

const Apartments = () => {
  const apartments = useLoaderData();
  return (
    <Container>
      <section>
        {apartments && apartments.length > 0 ? (
          <CardList apartments={apartments} />
        ) : (
          <EmptyState message="No Apartment Data Available" />
        )}
      </section>
    </Container>
  );
};

export default Apartments;
