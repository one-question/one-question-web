import StateLayout from "../components/StateLayout";

const Fail: React.FC = () => {
  return (
    <StateLayout
      icon="/images/icons/complete.svg"
      message="다음번에는 성공합시다!"
      title="오현재 만나기"
      subTitle="2023. 03. 23"
      button={{ text: "Reset" }}
    ></StateLayout>
  );
};

export default Fail;
