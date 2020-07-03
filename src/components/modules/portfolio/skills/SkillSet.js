import * as React from "react";
import react from "../../../../assets/img/skills/react.png";
import reactNative from "../../../../assets/img/skills/react-native.png";
import laravel from "../../../../assets/img/skills/laravel.png";
import php from "../../../../assets/img/skills/php.png";
import vue from "../../../../assets/img/skills/vue.png";
import bootstrap from "../../../../assets/img/skills/bootstrap.png";
import dotnet from "../../../../assets/img/skills/dotnet.png";
import js from "../../../../assets/img/skills/js.png";
import "./skills.css";
import Skill from "./Skill";

const SkillSet = () => {
  return (
    <div className="skil-set-area">
      <Skill img={php} name="PHP" exp_level={95} />
      <Skill img={laravel} name="Laravel PHP Framework" exp_level={95} />
      <Skill img={js} name="JavaScript" exp_level={85} />
      <Skill img={react} name="React JS Library" exp_level={95} />
      <Skill img={reactNative} name="React Native" exp_level={90} />
      <Skill img={vue} name="Vue JS" exp_level={90} />
      <Skill img={bootstrap} name="Bootstrap CSS Framework" exp_level={100} />
      <Skill img={dotnet} name="Dot Net Core" exp_level={50} />
    </div>
  );
};

export default SkillSet;
