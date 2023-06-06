import { InputPro } from "./inputpro";
// import "@styles/globals.css";
const Index = ({ style, type, placeholder }) => {
  return (
    <div>
      <InputPro style={style} type={type} placeholder={placeholder} />
    </div>
  );
};

export default Index;
