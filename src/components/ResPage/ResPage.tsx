import { useEffect, useState } from "react";
import StarRating from "../ui/StarRating/Starrating.tsx"; 
import styles from "./ResPage.module.scss";
import { ResPageProps } from "./ResPage.types.ts";
import { useForm } from "react-hook-form";
import { Feedback } from "../../../userdata.ts";
import { RESDATA } from "../../../resdata.ts";
import authAxios from "../../services/AxiosInstance.ts";

interface FormData {
  rating: string;
  feedbackText: string;
}

const ResPage = ({ selecteddata, feedbackdata }: ResPageProps) => {
  const [feedback, setFeedback] = useState<Feedback[]>(feedbackdata);
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const addFeedback = async (formData: FormData,resid:number) => {
    try {
      const { data } = await authAxios.post<FormData[]>(`/feedback/${resid}`, formData);
      setFeedback(data);
    } catch (error: any) {
      console.log(error.message);
    }
  };
 
  const onSubmit = (formData: FormData) => {
    console.log(formData);
    const resid=selecteddata[0].resid
    addFeedback(formData,resid);
   
  };

  return (
    <>
      {selecteddata.map((item: RESDATA) => (
        <div className={styles.ResPageMain} key={item.id}>
          <div className={styles.ResPageUpper}>
            <div>
              <img
                src={item.resimg}
                alt="restaurant Image here"
                height={300}
                width={500}
              />
              <img
                src="https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA1L3Vwd2s2MTY2MTU3Ny13aWtpbWVkaWEtaW1hZ2Uta293YXBlZWouanBn.jpg"
                alt="restaurant Image here"
                height={300}
                width={500}
              />
            </div>
            <div className={styles.ResPageContent}>
              <h3>{item.resname}</h3>
              <p>
                {item.resdesc}
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius
                harum eos deleniti. Possimus itaque quae totam deleniti quaerat!
                Eligendi, voluptatum corporis! Tenetur vel possimus eius impedit
                sunt nobis? Aperiam exercitationem eos molestias neque tempora
                animi modi quas consequatur omnis illo laudantium minus,
                molestiae reprehenderit, ipsam accusamus sint nobis commodi
                recusandae?
              </p>

              <div className={styles.FeedbackContainer}>
                <h3>Rate Us :</h3>
              
                <div className={styles.Feedback}>
                  <h3>Leave Us a valuable Feedback</h3>
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <textarea {...register("feedbackText")} />
                    <StarRating size={50} rating={4} />
                    Rating : <input type="number" {...register("rating")} />
                    <button type="submit" className={styles.FeedbackBtn}>
                      Give Feedback
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ResPage;
