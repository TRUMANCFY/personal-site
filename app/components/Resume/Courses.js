import React from 'react';
import PropTypes from 'prop-types';

import Course from './Courses/Course';

const uni_fullmark = {'EPFL': 6, 'WUSTL': 4, 'HKUST':4.3}

const groupBy = (courses, key) => {
  return courses.reduce((result, currentVal) => {
    (result[currentVal[key]] = result[currentVal[key]] || []).push(currentVal)
    return result
  }, {});
};


// const sep_uni = (uni_name, courses) => courses.filter((a) => {a.univerity == uni_name})

const getRows = (courses) => {
  let courseCat = courses.reduce((result, currentVal) => {
    (result[currentVal.univerity] = result[currentVal.univerity] || []).push(currentVal)
    return result
  }, {})

  let universities = Object.keys(courseCat)
  let courseSorted = universities.map((k, i) => {
  return courseCat[k].sort((a, b) => {
    let ret = 0;
    if (a.grade > b.grade) ret = -1;
    else if (a.grade < b.grade) ret = 1;
    return ret;
  }).map((course, idx) => {
    // console.log(course)
    return <Course
      data={course}
      key={course.title}
      last={idx === courses.length - 1}
    />
  });
})
let res = []

universities.forEach((v, i) => {
  res.push(<h3>{v}</h3>)
  res.push(<h4>{`Full Grade: ${uni_fullmark[v]}`}</h4>)
//   res.push(<div style="clear: both">
//   <p style="float: left">{v}</p>
//   <p style="float: right">{`Full Grade: ${uni_fullmark[v]}`}</p>
// </div>)
  courseCat[v].forEach((vc, ic) => {
    res.push(<Course
      data={vc}
      key={vc.title}
      last={ic === vc.length - 1}
    />)
  }
)
res.push(<br></br>)
})
console.log(res)
return res;
};

// const getRows = (courses) => courses.sort((a, b) => {
//   let ret = 0;
//   if (a.grade > b.grade) ret = -1;
//   else if (a.grade < b.grade) ret = 1;
//   return ret;
// }).map((course, idx) => {
//   console.log(course)
  // return <Course
  //   data={course}
  //   key={course.title}
  //   last={idx === courses.length - 1}
  // />
// });

const Courses = ({ data }) => (
  <div className="courses">
    <div className="link-to" id="courses" />
    <div className="title">
      <h3>Selected Courses</h3>
    </div>
    <ul className="course-list">
      {getRows(data)}
    </ul>
  </div>
);

Courses.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    number: PropTypes.string,
    link: PropTypes.string,
    univerity: PropTypes.string,
  })),
};

Courses.defaultProps = {
  data: [],
};

export default Courses;
