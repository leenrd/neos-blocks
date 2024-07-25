import { useParams } from "react-router-dom";
import NotFoundPage from "../common/not-found";
import templates from "@/lib/templates";

const TemplatePage = () => {
  const { id } = useParams();

  const component = templates.find((item) => item.id.toString() === id);

  if (!id || !component) {
    return <NotFoundPage />;
  }

  return <>{component.preview}</>;
};

export default TemplatePage;
