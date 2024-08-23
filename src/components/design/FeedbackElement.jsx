const FeedbackElement = ({ text, img, name, userName }) => {
  return (
    <div className="p-10 border max-w-xs w-full border-[#222222]/10 rounded-3xl shadow-[0_7px_14px_#eaeaea]">
      <p>{text}</p>
      <figure className="flex items-center gap-2 mt-5">
        <img src={img} alt={img} className="size-10 rounded-full" />
        <figcaption className="flex flex-col">
          <div className="font-medium tracking-tight leading-5">{name}</div>
          <div className="leading-5 tracking-tight">@{userName}</div>
        </figcaption>
      </figure>
    </div>
  );
};

export default FeedbackElement;
