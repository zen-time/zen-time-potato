// import Inputs from "@components/inputs";
"use client";
import Input from "@components/inputs/InputsType";
import SearchDefault from "@components/inputs/search-default/SearchDefault";
import SearchNeumorphism from "@components/inputs/search-neumorphism/SearchNeumorphism";

import SearchNormal from "@components/inputs/search-normal/SearchNormal";
import SearchOutline from "@components/inputs/search-outline/SearchOutline";
import SearchRoundedIcon from "@components/inputs/search-rounded-icon/SearchRoundedIcon";
import SearchSquareIcon from "@components/inputs/search-square-icon/SearchSquareIcon";
import SearchUnderline from "@components/inputs/search-underline/SearchUnderline";
import SearchVoiceIcon from "@components/inputs/search-voice-icon/SearchVoiceIcon";
import Search from "@components/inputs/search/Search";

const Home = () => {
  return (
    // <>
    //   <Input />
    //   <SearchDefault style={"search-underline"} />
    //   <div className="w-[2rem]">
    //     <SearchNormal
    //       textclr={"rose-500"}
    //       border={"rose-500"}
    //       icon={"icon"}
    //       radius={"2xl"}
    //       bg={"rose-800"}
    //       outline={"rose-800"}
    //     />
    //     <SearchUnderline
    //       icon={"icon"}
    //       iconclr={"rose-800"}
    //       border={"rose-500"}
    //       textclr={"rose-800"}
    //     />
    //     <SearchVoiceIcon textclr={"rose-800"} iconclr={"rose-800"} />
    //     <SearchNeumorphism iconclr={"rose-800"} radius={"2xl"} icon={"icon"} />
    //     <SearchSquareIcon
    //       border={"rose-800"}
    //       radius={"2xl"}
    //       icon={"o"}
    //       iconbg={"gray-500"}
    //       iconclr={"rose-800"}
    //     />
    //     <SearchRoundedIcon
    //       iconclr={"white"}
    //       iconbg={"green-700"}
    //       radius={"2xl"}
    //       border={"green-800"}
    //       bg={"white"}
    //       text={"rose-800"}
    //       placeholder={"search........"}
    //     />
    //   </div>
    // </>
    <>
      <Search />
      <SearchDefault />
      <SearchNeumorphism />
      <SearchNormal />
      <SearchOutline />
      <SearchRoundedIcon
        icon={"icon"}
        iconbg={"rose-800"}
        bg={"white"}
        border={"0"}
        radius={"2xl"}
      />
      <SearchSquareIcon
        icon={"icon"}
        iconbg={"rose-800"}
        bg={"white"}
        border={"0"}
        radius={"2xl"}
      />
      <SearchUnderline />
      <SearchSquareIcon
        icon={"icon"}
        iconbg={"orange-600"}
        bg={"grey-800"}
        border={"0"}
        radius={"2xl"}
        textclr={"orange-600"}
      />
      <SearchVoiceIcon />
    </>
  );
};

export default Home;
