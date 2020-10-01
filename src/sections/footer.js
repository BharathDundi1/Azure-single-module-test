import React from 'react';
import styled from 'styled-components';
import { DisplayText } from '../components/display-text';
import { Divider } from '../components/divider';
import Section from '../components/section-container';
import ContentLink, { CONTENT_MAP } from '../components/content-link';
import Row from 'muicss/lib/react/row';
import Col from 'muicss/lib/react/col';
import { Link } from 'react-router-dom';

import '../styles/footer.css'

const FooterContainer = styled(Section)`
    background-color:  #323232;
    padding-bottom: 0.5rem;

    .footer-content {
        margin-bottom: 5rem;

        text-align: left;
        color: white;

        .footer-main {
            .desc {
                margin-bottom: 2rem;
            }
        }

        .footer-prod-line, .contact-line {
            display: flex;
            flex-direction: column;

            margin-top: 1rem;

            >img {
                width: 1.5rem;
            }
        }

        .footer-social {
            display: flex;
            flex-direction: column;

            >* {
                margin-top: 0.5rem;
            }

            >:first-child {
                margin-top: 0;
            }
        }
    }
`;

const FooterLogo = styled.img`
    width: 50%;
    margin-bottom: 1rem;
`;

const FooterLink = styled(Link)`
    font-size: 0.5rem;
    line-height: 1rem;
`;

const FooterSection = ({ ...props }) => {
    return (
        <FooterContainer {...props}>
            <Row className="footer-content">
                <Col className="footer-main" sm={4} sm-offset={1}>
                    <FooterLogo src="/img/rgb-now-floats-logo-foot.png" alt="NowFloats" />
                    <div className="desc">
                        <DisplayText size="xsmall" color="white" variant="subdued" color="white">
                            NowFloats' mission is to connect 53 million businesses with over 600 million internet users in India. Our vision is to let them do it simply, easily and quickly.
                        </DisplayText>
                    </div>
                </Col>
                <Col xs={4} sm={2} sm-offset={1}>
                    <DisplayText size="small" color="primary">Products</DisplayText>
                    <div className="footer-prod-line">
                        <img src="/img/boost-360-insignia.png" alt="Boost360" />
                        <DisplayText size="small" color="white"><ContentLink link="https://www.getboost360.com">Boost</ContentLink></DisplayText>
                        <DisplayText size="xsmall" variant="subdued" color="white">for Small &amp; Mid-size business</DisplayText>
                    </div>
                    <div className="footer-prod-line">
                        <img src="/img/kitsune-app-icon-stancil.png" alt="Kitsune" />
                        <DisplayText size="small" color="white"><ContentLink link="https://www.getkitsune.com">kitsune</ContentLink></DisplayText>
                        <DisplayText size="xsmall" variant="subdued" color="white">for large enterprise</DisplayText>
                    </div>
                </Col>
                <Col xs={4} sm={2}>
                    <DisplayText size="small" color="primary">Contact</DisplayText>
                    <div className="contact-line">
                        <DisplayText size="xsmall" color="white"></DisplayText>
                        <DisplayText size="xsmall" variant="subdued" color="white"><ContentLink type={CONTENT_MAP.phone} link="1860-123-1233" /></DisplayText>
                    </div>
                    <div className="contact-line">
                        <DisplayText size="xsmall" color="white">SUPPORT</DisplayText>
                        <DisplayText size="xsmall" variant="subdued" color="white"><ContentLink type={CONTENT_MAP.mail} link="ria@nowfloats.com" /></DisplayText>
                    </div>
                    <div className="contact-line">
                        <DisplayText size="xsmall" color="white">CAREER</DisplayText>
                        <DisplayText size="xsmall" variant="subdued" color="white"><ContentLink type={CONTENT_MAP.mail} link="fun@nowfloats.com" /></DisplayText>
                    </div>
                    <div className="contact-line">
                        <DisplayText size="xsmall" color="white">INFO</DisplayText>
                        <DisplayText size="xsmall" variant="subdued" color="white"><ContentLink type={CONTENT_MAP.mail} link="hello@nowfloats.com" /></DisplayText>
                    </div>
                </Col>
                <Col xs={4} sm={2} className="footer-social">
                    <DisplayText size="small" color="primary">Links</DisplayText>
                    <DisplayText size="xsmall" variant="subdued" color="white"><ContentLink link="https://github.com/GetKitsune">Github</ContentLink></DisplayText>
                    <DisplayText size="xsmall" variant="subdued" color="white"><ContentLink link="https://angel.co/company/nowfloats/jobs">Angel.co</ContentLink></DisplayText>
                    <DisplayText size="xsmall" variant="subdued" color="white"><ContentLink link="https://twitter.com/NowFloats/">Twitter</ContentLink></DisplayText>
                    {/* <DisplayText size="xsmall" variant="subdued" color="white">YouTube</DisplayText> */}
                    {/* <DisplayText size="xsmall" variant="subdued" color="white">Facebook</DisplayText> */}
                    {/* <DisplayText size="xsmall" variant="subdued" color="white">Press Kit</DisplayText> */}
                </Col>
            </Row>
            <Row>
                <Divider color="#ffb900" />
            </Row>
            <div className='copyright-text'>
                <DisplayText size="xxsmall" color="white" variant="subdued" color="white">© 2020 NowFloats Technologies Pvt. Ltd.</DisplayText>
                <FooterLink to="/investor-relations"> Investor Relations </FooterLink>
            </div>
        </FooterContainer>
    )
}

export default FooterSection;
