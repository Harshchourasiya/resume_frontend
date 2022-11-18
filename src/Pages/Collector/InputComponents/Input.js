
import InputBase from "./InputBase";

const NameInput = () => {
    return (
        <InputBase label="Name" type="AddName" />
    );
}

const TitleInput = () => {

    return (
        <InputBase label="Title" type="AddTitle" />
    );
}

const AboutMeInput = () => {

    return (
        <InputBase label="About You" type="AddAboutMe" isMultiline={true} />
    );
}


export {
    NameInput,
    TitleInput,
    AboutMeInput
}