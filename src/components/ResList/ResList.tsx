import React, { useState } from "react";
import styles from "./ResList.module.scss";
import { ResListProps } from "./ResList.types";
import { useForm } from "react-hook-form";
import { RESDATA } from "../../../resdata";

interface FormRes {
  resname: string;
}

const ResList: React.FC<ResListProps> = ({ resdata, feedbackdata }) => {
  const [editedResName, setEditedResName] = useState<RESDATA[]>(resdata);
  const [editingResId, setEditingResId] = useState<number | null>(null);

  const { register, handleSubmit, reset } = useForm<FormRes>();

  const handleEdit = (data: FormRes, resid: number) => {
    console.log(data);

    const updatedResData = resdata.map((res) =>
      res.resid === resid ? { ...res, resname: data.resname } : res
    );
    setEditedResName(updatedResData);
    setEditingResId(null);
  };

  const handleEditClick = (resid: number) => {
    setEditingResId(resid);
  };

  return (
    <div className={styles.ResList}>
      {editedResName.map((res) => (
        <div key={res.resid} className={styles.ResEach}>
          <h2>
            <span>{res.resid}</span>{" "}
            {editingResId === res.resid ? (
              <form
                onSubmit={handleSubmit((data) => handleEdit(data, res.resid))}
              >
                <input type="text" {...register("resname")} placeholder="Enter new restaurant name" />
                <button className={styles.save} type="submit">
                  Save
                </button>
              </form>
            ) : (
              <>
                <span>{res.resname}</span>
                <button
                  className={styles.edit}
                  onClick={() => handleEditClick(res.resid)}
                >
                  Edit
                </button>
              </>
            )}
          </h2>
          <ul className={styles.Feedbacklist}>
            {feedbackdata
              .filter((feedback) => feedback.resid === res.resid)
              .map((feedback) => (
                <li key={feedback.userid} className={styles.FeedbackEach}>
                  {feedback.feedbackText} {feedback.rating}
                </li>
              ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default ResList;
