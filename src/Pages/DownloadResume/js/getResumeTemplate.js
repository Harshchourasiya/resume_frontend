import { SIMPLE_ID, MATRIX_ID, DARK_RED_MATRIX_ID, DARK_RED_SIMPLE_ID } from "../../../helper/Strings";
import Simple from "../../../Components/ResumeTemplates/Simple";
import Matrix from "../../../Components/ResumeTemplates/Matrix";


const BLACK = "#000";
const DARK_RED = "#e44747";


const getResumeTemplate = (id, props) => {
    switch (id) {
        case SIMPLE_ID:
            return <Simple data={props} color={BLACK} />;
        case MATRIX_ID:
            return <Matrix data={props} color={BLACK} />
        case DARK_RED_MATRIX_ID:
            return <Matrix data={props} color={DARK_RED} />
        case DARK_RED_SIMPLE_ID:
            return <Simple data={props} color={DARK_RED} />;
        default:
            return <Simple data={props} color={BLACK} />;
    }
}

export {
    getResumeTemplate
}

