import "./list.scss";
import Sidebar from "../../../../components/sidebar/Sidebar";
import Datatable from "../../../../components/orderDatatable/Datatable";

const List = () => {
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Datatable />
      </div>
    </div>
  );
};

export default List;
