import style from "./Description.module.css";

function Description({ title, text }) {
  return (
    <>
      <h1 className={style.title}>{title}</h1>
      <p className={style.text}>{text}</p>
    </>
  );
}

export default Description;
