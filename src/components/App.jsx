import Input from "./Input";
import generatePDF from "./generatePDF.jsx";
import { useState } from "react";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "../../components/ui/accordion.jsx"
import TextArea from "./TextArea.jsx";
import React from 'react';

function App() {
    const [cvNameInputText, setCvNameInputText] = useState('Muhammad Sumbul');
    const [emailInputText, setEmailInputText] = useState('msumbul@catmail.com');
    const [phoneNumberInputText, setPhoneNumberInputText] = useState('123-456-789');

    const [schoolNameInputText, setSchoolNameInputText] = useState('Smallpox University');
    const [titleOfStudyInputText, setTitleOfStudyInputText] = useState('B.Sc, Computer Science');
    const [dateOfStudyInputText, setDateOfStudyInputText] = useState('2015-2019');

    const [companyNameInputText, setCompanyNameInputText] = useState('TechCorp');
    const [positionTitleInputText, setPositionTitleInputText] = useState('Network Engineer');
    const [mainResponsibilitiesInputText, setMainResponsibilitiesInputText] = useState(
        `- Managing network infrastructure including configuration, maintenance, and upgrades.
      - Monitoring network performance and optimizing system resources.
      - Coordinating with vendors and service providers for network solutions and support.
      - Developing and maintaining documentation for network configurations and procedures.`
      );
    
    const [employmentDatesInputText, setEmploymentDatesInputText] = useState('2019-2023');
    const [addressInputText, setAddressInputText] = useState('123 Street Name, City, Country');
    const [summaryInputText, setSummaryInputText] = useState('Experienced network engineer with a focus on managing network infrastructure.');
    const [skillsInputText, setSkillsInputText] = useState('Networking, Troubleshooting, Security, Cisco Systems');
    const [certificationsInputText, setCertificationsInputText] = useState('CCNA, CompTIA Network+');
    const [languagesInputText, setLanguagesInputText] = useState('English, Spanish');
    const [referencesInputText, setReferencesInputText] = useState('Available upon request.');

    function onChangeFuncCvName(e) { setCvNameInputText(e.target.value); }
    function onChangeFuncEmail(e) { setEmailInputText(e.target.value); }
    function onChangeFuncPhoneNumber(e) { setPhoneNumberInputText(e.target.value); }
    function onChangeFuncSchoolName(e) { setSchoolNameInputText(e.target.value); }
    function onChangeFuncTitleOfStudy(e) { setTitleOfStudyInputText(e.target.value); }
    function onChangeFuncDateOfStudy(e) { setDateOfStudyInputText(e.target.value); }
    function onChangeFuncCompanyName(e) { setCompanyNameInputText(e.target.value); }
    function onChangeFuncPositionTitle(e) { setPositionTitleInputText(e.target.value); }
    function onChangeFuncMainResponsibilities(e) { setMainResponsibilitiesInputText(e.target.value); }
    function onChangeFuncEmploymentDates(e) { setEmploymentDatesInputText(e.target.value); }
    function onChangeFuncAddress(e) { setAddressInputText(e.target.value); }
    function onChangeFuncSummary(e) { setSummaryInputText(e.target.value); }
    function onChangeFuncSkills(e) { setSkillsInputText(e.target.value); }
    function onChangeFuncCertifications(e) { setCertificationsInputText(e.target.value); }
    function onChangeFuncLanguages(e) { setLanguagesInputText(e.target.value); }
    function onChangeFuncReferences(e) { setReferencesInputText(e.target.value); }

    return (
        <>
            <main>
                <section aria-labelledby="input-section" id='input-block'>
                    <h1 id='input-section'>CV Generator</h1>
                    <h2>Enter your information</h2>

                    <Accordion type="single" collapsible className="accordion-item-padding">
                        <AccordionItem value="general-information">
                            <AccordionTrigger>General Information</AccordionTrigger>
                            <AccordionContent className="AccordionContent">
                                <label htmlFor="cvname">Name:</label>
                                <br />
                                <Input className='input cvname' id='cvname' text={cvNameInputText} onChangeFunc={onChangeFuncCvName} />
                                <br />
                                <label htmlFor="email">Email:</label>
                                <br />
                                <Input className='input email' id='email' text={emailInputText} onChangeFunc={onChangeFuncEmail} />
                                <br />
                                <label htmlFor="phonenumber">Phone Number:</label>
                                <br />
                                <Input className='input phonenumber' id='phonenumber' text={phoneNumberInputText} onChangeFunc={onChangeFuncPhoneNumber} />
                                <br />
                                <label htmlFor="address">Address:</label>
                                <br />
                                <Input className='input address' id='address' text={addressInputText} onChangeFunc={onChangeFuncAddress} />
                                <br />
                                {/* <label htmlFor="linkedin">LinkedIn:</label>
                                <br />
                                <Input className='input linkedin' id='linkedin' text={linkedInInputText} onChangeFunc={onChangeFuncLinkedIn} />
                                <br />
                                <label htmlFor="website">Website:</label>
                                <br />
                                <Input className='input website' id='website' text={websiteInputText} onChangeFunc={onChangeFuncWebsite} /> */}
                                {/* <br /> */}
                                <label htmlFor="summary">Summary:</label>
                                <br />
                                <Input className='input summary' id='summary' text={summaryInputText} onChangeFunc={onChangeFuncSummary} />
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="work-experience">
                            <AccordionTrigger>Work Experience</AccordionTrigger>
                            <AccordionContent>
                                <label htmlFor="companyname">Company Name:</label>
                                <br />
                                <Input className='input companyname' id='companyname' text={companyNameInputText} onChangeFunc={onChangeFuncCompanyName} />
                                <br />
                                <label htmlFor="positiontitle">Position Title:</label>
                                <br />
                                <Input className='input positiontitle' id='positiontitle' text={positionTitleInputText} onChangeFunc={onChangeFuncPositionTitle} />
                                <br />
                                <label htmlFor="mainresponsibilities">Main Responsibilities:</label>
                                <br />
                                <TextArea className='input mainresponsibilities' id='mainresponsibilities' text={mainResponsibilitiesInputText} onChangeFunc={onChangeFuncMainResponsibilities} />
                                <br />
                                <label htmlFor="employmentdates">Dates of Employment:</label>
                                <br />
                                <Input className='input employmentdates' id='employmentdates' text={employmentDatesInputText} onChangeFunc={onChangeFuncEmploymentDates} />
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="educational-experience">
                            <AccordionTrigger>Educational Experience</AccordionTrigger>
                            <AccordionContent>
                                <label htmlFor="schoolname">School Name:</label>
                                <br />
                                <Input className='input schoolname' id='schoolname' text={schoolNameInputText} onChangeFunc={onChangeFuncSchoolName} />
                                <br />
                                <label htmlFor="titleofstudy">Title of Study:</label>
                                <br />
                                <Input className='input titleofstudy' id='titleofstudy' text={titleOfStudyInputText} onChangeFunc={onChangeFuncTitleOfStudy} />
                                <br />
                                <label htmlFor="dateofstudy">Date of Study:</label>
                                <br />
                                <Input className='input dateofstudy' id='dateofstudy' text={dateOfStudyInputText} onChangeFunc={onChangeFuncDateOfStudy} />
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="other">
                            <AccordionTrigger>Other</AccordionTrigger>
                            <AccordionContent>
                                <label htmlFor="skills">Skills:</label>
                                <br />
                                <Input className='input skills' id='skills' text={skillsInputText} onChangeFunc={onChangeFuncSkills} />
                                <br />
                                <label htmlFor="certifications">Certifications:</label>
                                <br />
                                <Input className='input certifications' id='certifications' text={certificationsInputText} onChangeFunc={onChangeFuncCertifications} />
                                <br />
                                <label htmlFor="languages">Languages:</label>
                                <br />
                                <Input className='input languages' id='languages' text={languagesInputText} onChangeFunc={onChangeFuncLanguages} />
                                <br />
                                <label htmlFor="references">References:</label>
                                <br />
                                <Input className='input references' id='references' text={referencesInputText} onChangeFunc={onChangeFuncReferences} />
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                    <button id='downloadButton' onClick={generatePDF} >Download PDF</button>

                </section>


                <div id="preview">
                    <h1 className="shadow cvname">{cvNameInputText.toUpperCase()}</h1>
                    <p className="shadow email phonenumber">{emailInputText} | {phoneNumberInputText} | {addressInputText}</p>
                    {/* <a className="shadow linkedin" href={linkedInInputText}>{linkedInInputText}</a>
                    <a className="shadow website" href={websiteInputText}>{websiteInputText}</a> */}

                    {/* <h2 className="shadow header">Summary</h2> */}
                    <p className="shadow summary">{summaryInputText}</p>

                    <h2 className="shadow header">Work Experience</h2>
                    <p className="shadow companyname">{companyNameInputText}</p>
                    <p className="shadow positiontitle">{positionTitleInputText}</p>
                    <br />
                    <p className="shadow employmentdates">{employmentDatesInputText}</p>
                    <p className="shadow mainresponsibilities">
                    {mainResponsibilitiesInputText.split('\n').map((line, index) => (
                        <React.Fragment key={index}>
                        {line}
                        <br />
                        </React.Fragment>
                    ))}
                    </p>
                    <h2 className="shadow header">Educational Experience</h2>
                    <p className="shadow schoolname">{schoolNameInputText}</p>
                    <p className="shadow titleofstudy">{titleOfStudyInputText}</p>
                    <br />
                    <p className="shadow dateofstudy">{dateOfStudyInputText}</p>
                    
                    <h2 className="shadow header">Skills</h2>
                    <p className="shadow skills">{skillsInputText}</p>

                    <h2 className="shadow header">Certifications</h2>
                    <p className="shadow certifications">{certificationsInputText}</p>

                    <h2 className="shadow header">Languages</h2>
                    <p className="shadow languages">{languagesInputText}</p>

                    <h2 className="shadow header">References</h2>
                    <p className="shadow references">{referencesInputText}</p>

                </div>
            </main>
        </>
    )
}

export default App