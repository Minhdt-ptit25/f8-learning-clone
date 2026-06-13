const coursesData = require('../data');

const getCourseList = (req, res) => {
    const courseList = Object.keys(coursesData).map(key => ({
        id: key,
        title: coursesData[key].title
    }));
    res.json(courseList);
};

const getCourseById = (req, res) => {
    const { id } = req.params;
    const course = coursesData[id];
    if (course) {
        res.json(course);
    } else {
        res.status(404).json({ message: 'Course not found' });
    }
};

module.exports = {
    getCourseList,
    getCourseById
};
