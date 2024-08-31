// regex for validation
const strRegex = /^[a-zA-Z\s]*$/; //only letters
const emailRegex =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const phoneRegex =
  /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
/* supports following number formats - (123) 456-7890, (123)456-7890, 123-456-7890, 123.456.7890, 1234567890, +31636363634, 075-63546725 */
const digitRegex = /^\d+$/;

const validType = {
    Text:'text',
    TEXT_EMP:'text_emp',
    EMAIL:'email',
    DIGIT:'digit',
    PHONENO:'phoneno',
    ANY:'any'
}

const mainForm = document.getElementById("cv-form");

const firstNameEle = mainForm.firstname;
const middlenameEle = mainForm.middlename;
const lastnameEle = mainForm.lastname;
const imageEle = mainForm.image;
const designationEle = mainForm.designation;
const addressEle = mainForm.address;
const emailEle = mainForm.email;
const phonenoEle = mainForm.phoneno;
const summaryEle = mainForm.summary;

const fetchValues = (attrs, ...nodeLists) => {
  let elemsAttrsCount = nodeLists.length;
  let elemsDataCount = nodeLists[0].length;
  let tempDataArr = [];

  for (let i = 0; i < elemsDataCount; i++) {
    let dataObject = {};
    for (let j = 0; j < elemsAttrsCount; j++) {
      dataObject[`${attrs[j]}`] = nodeLists[j][i].value;
    }
    tempDataArr.push(dataObject);
  }

  return tempDataArr;
};

const getUserInputs = () => {
  let achievementsTitleElem = document.querySelectorAll(".achieve_title"),
    achievementsDescriptionElem = document.querySelectorAll(
      ".achieve_description"
    );

  let expTitleElem = document.querySelectorAll(".exp_title"),
    expOrganizationElem = document.querySelectorAll(".exp_organization"),
    expLocationElem = document.querySelectorAll(".exp_location"),
    expStartDateElem = document.querySelectorAll(".exp_start_date"),
    expEndDateElem = document.querySelectorAll(".exp_end_date"),
    expDescriptionElem = document.querySelectorAll(".exp_description");

  let eduSchoolElem = document.querySelectorAll(".edu_school"),
    eduDegreeElem = document.querySelectorAll(".edu_degree"),
    eduCityElem = document.querySelectorAll(".edu_city"),
    eduStartDateElem = document.querySelectorAll(".edu_start_date"),
    eduGraduationDateElem = document.querySelectorAll(".edu_graduation_date"),
    eduDescriptionElem = document.querySelectorAll(".edu_description");

let projTitleElem = document.querySelectorAll('.proj_title'),
projLinkElem = document.querySelectorAll('.proj_link'),
projDescription = document.querySelectorAll('.proj_description')

let skillEle = document.querySelectorAll('.skill')

firstNameEle.addEventListener('keyup',(e)=>validateFormatData(e.target,validType.Text,"First Name"))
  return {
    firstname: firstNameEle.value,
    middlename: middlenameEle.value,
    lastname: lastnameEle.value,
    designation: designationEle.value,
    address: addressEle.value,
    email: emailEle.value,
    phone: phonenoEle.value,
    summary: summaryEle.value,
    achievements: fetchValues(
      ["achieve_title", "achieve_description"],
      achievementsTitleElem,
      achievementsDescriptionElem
    ),
    experiences: fetchValues(
      [
        "exp_title",
        "exp_organization",
        "exp_location",
        "exp_start_date",
        "exp_end_date",
        "exp_description",
      ],
      expTitleElem,
      expOrganizationElem,
      expLocationElem,
      expStartDateElem,
      expEndDateElem,
      expDescriptionElem
    ),
    educations: fetchValues(
      [
        "edu_school",
        "edu_degree",
        "edu_city",
        "edu_start_date",
        "edu_graduation_date",
        "edu_description",
      ],
      eduSchoolElem,
      eduDegreeElem,
      eduCityElem,
      eduStartDateElem,
      eduGraduationDateElem,
      eduDescriptionElem
    ),
    projects:fetchValues(['proj_title','proj_link','proj_description'],projTitleElem,projLinkElem,projDescription),
    skills:fetchValues(['skill'],skillEle)
  };
};

function validateFormatData(elem,elemType,elemName){
    if(elemType === validType.Text){
        if(!strRegex.test(elem.value) || elem.value.trim().length === 0) addErrorMsg(elem,elemName)
        else removeErrorMsg(elem)
    }

    if(elemType === validType.TEXT_EMP){
        if(!strRegex.test(elem.value)) addErrorMsg(elem,elemName)
        else removeErrorMsg(elem)
    }
    if(elemType === validType.EMAIL){
        if(!emailRegex.test(elem.value) || elem.value.trim().length === 0) addErrorMsg(elem,elemName)
        else removeErrorMsg(elem)
    }
    if(elemType === validType.PHONENO){
        if(!phoneRegex.test(elem.value) || elem.value.trim().length === 0) addErrorMsg(elem,elemName)
        else removeErrorMsg(elem)
    }
    if(elemType === validType.ANY){
        if(elem.value.trim().length === 0) addErrorMsg(elem,elemName)
        else removeErrorMsg(elem)
    }

}

function addErrorMsg(formElem,FormElemName) {
    formElem.nextElementSibling.innerHTML = `${FormElemName} is invalid`
}

function removeErrorMsg(formElem) {
    formElem.nextElementSibling.innerHtml = ''
}


const generateCV = () => {
  let userData = getUserInputs();
  console.log(userData);
};
