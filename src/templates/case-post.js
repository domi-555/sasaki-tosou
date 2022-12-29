import * as React from "react"
import { Link,graphql } from "gatsby"

import Seo from "../components/Seo"

import Header from "../components/Header"

import Layout from "../components/Layout"
import Sideb from "../components/sideb"

const CasePost = ({data}) => {
  return (
    <>
      <Header />
        
      <Layout>
        <Seo />

            <div id="mainimage-sub" className='gaiheki'>
                <div id="mainimage-inner">
                </div>
            </div>

            <section id="sub-page">
              <div className='main-content'>

                

                <div className="flex-wrap">
                  <div className="main_b">
                    <h2 className="page_title01 mt0">施工事例</h2>

                    <h3 className="case_title">{data.microcmsCase.title}</h3>
                    <p><span className="date">{data.microcmsCase.date}</span></p>

                    <div className="case_box">
                      <div className="case_box_l">
                        <p className="case_title2">before</p>
                        <img src={data.microcmsCase.maeImg.url} alt="" />

                      </div>
                      <div className="case_box_r">
                        <p className="case_title2">after</p>
                        <img src={data.microcmsCase.atoImg.url} alt="" />
                      </div>
                    </div>
				
                    <table className="case_table">
                      <tbody>
                        <tr>
                          <th>施工内容</th>
                          <td></td>
                        </tr>
                        <tr>
                          <th>工期</th>
                          <td>{data.microcmsCase.casePeriod}</td>
                        </tr>
                        <tr>
                          <th>説明</th>
                          <td></td>
                        </tr>
                      </tbody>
                    </table>

                    <p className="center"><Link to="/case/" className="bt02">一覧へ戻る</Link></p>

                  </div>
                  <Sideb />
                </div>
                
                

              </div>
            </section>
        
        </Layout>
    </>
  )
}

export default CasePost

export const query = graphql`
query ($id: String) {
  microcmsCase(caseId: {eq: $id}) {
    caseId
    title
    date(formatString: "YYYY年MM月DD日")
    category {
      slug
      id
      name
    }
    maeImg {
      url
    }
    atoImg {
      url
    }
    caseDescription
    casePeriod
    casetxt
  }
}
`