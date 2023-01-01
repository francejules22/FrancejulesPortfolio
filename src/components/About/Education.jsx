import React from 'react';
import './Education.css';


const Education = () => {
    return(
       <table className="table">
          <thead>
              <tr>
                 <th>Degree</th>
                 <th>Department</th>
                 <th>Institute</th>
                 <th>Year</th>
              </tr>
          </thead>

          <tbody>
             <tr>
                 <td>BS in Computer Science</td>
                 <td>College of Arts and Sciences</td>
                 <td>Iloilo Science and Technology University</td>
                 <td>2019 - 2023</td>
             </tr>

             <tr>
                 <td>TVL- Computer System Servicing</td>
                 <td>ICT Department</td>
                 <td>Bingawan National High School</td>
                 <td>2017 - 2019</td>
             </tr>

             <tr>
                 <td>Junior High</td>
                 <td>Junior High School</td>
                 <td>Bingawan National High School</td>
                 <td>2013 - 2017</td>
             </tr>
          </tbody>
       </table>
    )
}
export default Education;