
import toast from "react-hot-toast";

export async function makePostRequest(
    setLoading, endpoint, data, resourceName, reset ){
        try{

            setLoading(true);
            const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
            const response = await fetch(`${baseUrl}/${endpoint}`,{
                method: "POST",
                headers: {
                    "Content-Type": "applicaton/json",
                },
                body: JSON.stringify(data),
            });
            if(response.ok){
                setLoading(false);
                toast.success(`New ${resourceName} Created Successfully`);
                reset();
            }else{
                setLoading(false);
                if(response.status=== 409){
                    toast.error("Your are try agian later");
                }else{
                    toast.error("Something Went Wrong");
                }
            }
        } catch (error){
            setLoading(false);
            console.log(error);
        }
    }
    