import { FC } from "react";
import EmptyState from "../components/EmptyState";
import getCurrentUser from "../actions/getCurrentUsers";
import getListings from "../actions/getListings";
import PropertiesClient from "./PropertiesClient";

interface pageProps {}

const Properties: FC<pageProps> = async ({}) => {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return <EmptyState title="Unauthorized" subtitle="Please login" />;
  }

  const listings = await getListings({
    userId: currentUser.id,
  });

  if (listings.length === 0) {
    return (
      <EmptyState
        title="No properties found"
        subtitle="Looks like you have no properties"
      />
    );
  }

  return <PropertiesClient listings={listings} currentUser={currentUser} />;
};

export default Properties;
