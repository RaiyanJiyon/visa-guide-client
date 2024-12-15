import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const FAQ = () => {
    return (
        <div className="hero min-h-screen w-11/12 mx-auto">
            <div className="hero-content flex-col lg:flex-row lg:items-start gap-10">
                <div className="lg:w-1/2">
                    <div className='space-y-4'>
                        <h2 className="text-4xl font-bold">Common questions answered</h2>
                        <p className="text-gray-600">
                            At the heart of our commitment to providing exceptional immigration solutions stands our trusted team.
                        </p>
                    </div>
                    <img
                        src="https://wp.xpressbuddy.com/evisa/wp-content/uploads/2023/12/faq_img.png"
                        className="max-w-sm rounded-lg mt-10"
                    />
                </div>
                <div className="lg:w-1/2">
                    <Accordion className='mb-4'>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1-content"
                            id="panel1-header"
                            className='text-xl'
                        >
                            What services do you offer?
                        </AccordionSummary>
                        <AccordionDetails className='text-sm'>
                            We offer comprehensive immigration and visa consulting services, including visa application assistance, document preparation, and more. Our services include:
                            <ul>
                                <li>Comprehensive Visa Assistance</li>
                                <li>Visa Category Expertise</li>
                                <li>Transparency and Communication</li>
                            </ul>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion className='mb-4'>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2-content"
                            id="panel2-header"
                            className='text-xl'
                        >
                            What is the consultation process like?
                        </AccordionSummary>
                        <AccordionDetails className='text-sm'>
                            Our consultation process is designed to be straightforward and stress-free. We start with an initial assessment to understand your needs, followed by detailed guidance on the necessary steps and documentation required for your visa application.
                        </AccordionDetails>
                    </Accordion>
                    <Accordion className='mb-4'>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel3-content"
                            id="panel3-header"
                            className='text-xl'
                        >
                            How much do your services cost?
                        </AccordionSummary>
                        <AccordionDetails className='text-sm'>
                            Our service fees vary depending on the complexity of your case and the type of visa you are applying for. We provide a detailed breakdown of costs during the initial consultation, ensuring complete transparency.
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel4-content"
                            id="panel4-header"
                            className='text-xl'
                        >
                            How do I get started with your services?
                        </AccordionSummary>
                        <AccordionDetails className='text-sm'>
                            Getting started with our services is easy. Simply contact us to schedule an initial consultation, where we will discuss your requirements and outline the steps needed to proceed with your visa application.
                        </AccordionDetails>
                    </Accordion>
                    <Accordion className='mb-4'>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel5-content"
                            id="panel5-header"
                            className='text-xl'
                        >
                            What is your success rate with visa applications?
                        </AccordionSummary>
                        <AccordionDetails className='text-sm'>
                            We pride ourselves on a high success rate with visa applications. Our experienced team ensures that your application is thorough and complies with all regulatory requirements, maximizing your chances of approval.
                        </AccordionDetails>
                    </Accordion>
                </div>
            </div>
        </div>
    );
};

export default FAQ;
