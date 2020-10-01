import React, { useState, useEffect } from "react";
import FooterSection from "../sections/footer";
import { Divider, Select, Option } from "muicss/react";
import styled from 'styled-components';

import { DisplayText } from "../components/display-text";
import { pdfInfo } from '../config';
import { Link } from "react-router-dom";

const PageHeader = styled.div`
  padding: 2rem 0;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const Logo = styled.img`
  width: 100%;
  max-width: 200px;
`;

const Container = styled.div`
    width: 60%;
    margin: 0 auto;
    padding-bottom: 5rem;
`;

const ReportsHeader = styled.header`
  padding-top: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ReportRow = styled.div`

  box-sizing: border-box;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  border: 1px solid #ECECEC;
  border-radius: 10px;

  padding: 0.5rem 1rem;

  margin-bottom: 1rem;
`;

const DownloadReport = styled.a`
  box-sizing: border-box;
  padding: 0.125rem;

  width: 2.125rem;
  height: 2.125rem;
  max-width: 2.125rem;

  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    border: 1px solid #E5E5E5;
    border-radius: 6px;
  }
`;

const ClickAbleText = styled(DisplayText)`
  cursor: pointer;
`;


const optionText = (year) => 
  `FY${year}-${(year+1).toString().substr(2)}`

const InvestorRelations = () => {

  const { yearsAvailable: availableFinancialYears, pdfsAvailable } = pdfInfo;

  const [selectedYear, setSelectedYear] = useState( availableFinancialYears[0] );
  const [availablePdfs, setAvailablePdfs] = useState( pdfsAvailable[selectedYear] );

  useEffect( () => {
    window.scrollTo(0,0)
  },[])

  useEffect( () => {
    setAvailablePdfs(pdfsAvailable[selectedYear])
  },[selectedYear])

  return (
    <>
      <Container>
        <PageHeader>
          <Link to='/'>
            <Logo src="/img/rgb-now-floats-logo-foot.png" alt="NowFloats" />
          </Link>
        </PageHeader>
        
        <Divider bg="white" />

        <section>
          <ReportsHeader>
            <DisplayText size='small' color='light'>
              NowFloats Monthly Outlook
            </DisplayText>
            <Select
              value={selectedYear} 
              onChange={ ({target}) => setSelectedYear(target.value) }
              >
                { 
                  availableFinancialYears.map( (year, ind) => 
                    <Option label={optionText(year)} key={ind} value={year} />    
                  ) 
                }
            </Select>
          </ReportsHeader>

          { 
            availablePdfs.length > 0 ? 
              availablePdfs.map( (pdfObj, ind) => 
                <ReportRow key={ind}>
                  <div>
                    <ClickAbleText 
                      onClick={ () => window.open(pdfObj.src,'_blank') } 
                      size='small' 
                      variant='medium' 
                      color='secondary'
                      title='Open in new tab'
                    >
                      { pdfObj.title }
                    </ClickAbleText>
                  </div>
                  <DownloadReport 
                    href={pdfObj.src} 
                    title='Download Now'
                    download={pdfObj.title}
                  >
                    <img src='img/download.svg' alt='download-icon'/>
                  </DownloadReport>
                </ReportRow>
              )
               :
              null
          }
          

        </section>
      </Container>
      
      {/* Web footer */}
      <FooterSection id="footer" />
    </>
  )
}

export default InvestorRelations; 