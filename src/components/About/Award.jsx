
import React from 'react';
import './Award.css'

const Award = () => {
    return(
       <div className="award-container d-flex align-items-center flex-wrap justify-content-between">
          <div className="award-item">
               <AwardItem 
                    year='2021' 
                    title='Best Output Award' 
                    text='Outstanding Performance in the Online Training for FRONT-END WEB DEVELOPMENT through the BPI Technical-Vocational Program held on August 10-25 2021.' 
                />
          </div>

          <div className="award-item">
               <AwardItem 
                    year='2022' 
                    title='Top 10 in Philippine StartUp Challenge' 
                    text='As one of the members of ANIMAUX that won the Top 10 in the Philippine Startup Challenge 7 - Regional Pitching Competition Region VI on October 27, 2022.' 
                />
          </div>

          <div className="award-item">
               <AwardItem 
                    year='2021' 
                    title='Exchange Student' 
                    text='Earned 3(three) credits in the International Credit Transfer Program in Bachelor on Informatics at Sekolah Tinggi Informatika dan Komputer Indonesia (STIKI) Malang during the period of odd semester year 2021/2022.' 
                />
          </div>


          <div className="award-item">
               <AwardItem 
                    year='2019-2022' 
                    title='Dean Lister' 
                    text='Demonstrating excellence in academic endeavors and for qualifying as Dean Lister for 1st-2nd Semester of 2019-2020, 1st-2nd Semester of 2020-2021, 1st-2nd Semester of 2021-2022.' 
                />
          </div>
       </div>
    )
}

const AwardItem = ({year, title, text}) => {
    return(
        <div className="single-award">
           <div className="award-year">{year}</div>
           <h6 className="award-title"><span>{title}<br /></span> {text}</h6>
        </div>
    )
}

export default Award;