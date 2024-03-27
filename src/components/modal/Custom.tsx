import { RootState } from "../../store";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../../store/slice/modalSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faXmark } from "@fortawesome/free-solid-svg-icons";
import { goBack } from "../../store/slice/modalSlice";
import AddProduct from "./AddProduct";
import ExportData from "./ExportData";
import EditBusiness from "./EditBusiness";
import AddBusiness from "./AddBusiness";

const modals = [
  {
    name: "addProduct",
    component: <AddProduct />,
  },
  {
    name: "exportData",
    component: <ExportData />,
  },
  {
    name: "editBusiness",
    component: <EditBusiness />,
  },
  {
    name: "addBusiness",
    component: <AddBusiness />,
  },
];

const Custom = () => {
  const dispatch = useDispatch();
  const { routes } = useSelector((state: RootState) => state.modal);
  const routeIndex = routes[routes.length - 1];

  const getComp = (index: typeof routeIndex) => {
    const finder = modals.find(
      (mod) => mod.name.toLowerCase() === index?.toLowerCase()
    );
    if (finder) {
      return finder.component;
    }
    return null;
  };

  return (
    <div>
      <div className="flex mb-2 items-center">
        {routes.length > 1 && (
          <button onClick={() => dispatch(goBack())}>
            <FontAwesomeIcon icon={faArrowLeft} />
          </button>
        )}
        <button onClick={() => dispatch(closeModal())} className="ml-auto">
          <FontAwesomeIcon className="scale-[2] text-[gray]" icon={faXmark} />
        </button>
      </div>
      {getComp(routeIndex)}
    </div>
  );
};

export default Custom;
