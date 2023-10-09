import { useEffect } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const ServicesDtls = () => {
    const datas = useLoaderData();
    const { id } = useParams();

    const data = datas.find(data => data.id == id);

    
    useEffect(() => {
        document.title = `${data.title}`
    }, []);

    return (
        <div className="w-11/12 mx-auto mt-10">
            <div className="grid grid-cols-3 ">
                <div className=" col-span-2">
                    <img className="w-[90%]" src={data.image} alt="" />
                </div>
                <div className="">
                    <h1 className="text-xl font-bold ">{data?.title}</h1>
                    <h1>{data.sub_title}</h1>
                </div>
            </div>
            <p className="mt-4">{data.description}</p>
        </div>
    );
};

export default ServicesDtls;