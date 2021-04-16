import preloader from "../../../assets/images/loading.svg";

let Preloader = () => {
    return (
        <div style={{ backgroundColor: "white" }}>
            <img src={preloader} alt="" />
        </div>
    );
};

export default Preloader;
