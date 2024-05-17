import { FC } from "react";
import Loader from "./components/Loader";

interface loadingProps {}

const Loading: FC<loadingProps> = ({}) => {
  return <Loader />;
};

export default Loading;
