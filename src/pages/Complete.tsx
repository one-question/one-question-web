import StateLayout from "../components/StateLayout";

const Complete: React.FC = () => {
  return (
    <StateLayout
      icon="/images/icons/complete.svg"
      message="축하드립니다"
      title="오현재 만나기"
      subTitle="2023. 03. 23"
      button={{ text: "Reset" }}
    ></StateLayout>
  );
};

export default Complete;
