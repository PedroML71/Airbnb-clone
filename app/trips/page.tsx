import { FC } from "react";
import EmptyState from "../components/EmptyState";
import getCurrentUser from "../actions/getCurrentUsers";
import getReservations from "../actions/getReservations";
import TripsClient from "./TripsClient";

interface pageProps {}

const page: FC<pageProps> = async ({}) => {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return <EmptyState title="Unauthorized" subtitle="Please login" />;
  }

  const reservations = await getReservations({
    userId: currentUser.id,
  });

  if (reservations.length === 0) {
    <EmptyState
      title="No Trips found"
      subtitle="Looks like you haven't reserved any trips."
    />;
  }

  return <TripsClient reservations={reservations} currentUser={currentUser} />;
};

export default page;
