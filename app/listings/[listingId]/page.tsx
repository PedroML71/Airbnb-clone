import { FC } from "react";
import getListingsById from "@/app/actions/getListingsById";
import EmptyState from "@/app/components/EmptyState";
import getCurrentUser from "@/app/actions/getCurrentUsers";
import ListingClient from "./ListingClient";
import getReservations from "@/app/actions/getReservations";

type IParams = {
  listingId?: string;
};

interface pageProps {
  params: IParams;
}

const page: FC<pageProps> = async ({ params }) => {
  const listing = await getListingsById(params);
  const currentUser = await getCurrentUser();
  const reservations = await getReservations(params);

  if (!listing) {
    return <EmptyState />;
  }

  return (
    <ListingClient
      listing={listing}
      currentUser={currentUser}
      reservations={reservations}
    />
  );
};

export default page;
