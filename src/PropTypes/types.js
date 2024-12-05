import PropTypes from "prop-types";

// type for projectsData
export const ProjectType = {
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    skills: PropTypes.arrayOf(PropTypes.string).isRequired,
    repoLink: PropTypes.string,
    link: PropTypes.string,
    category: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    imageKey: PropTypes.string.isRequired
}

// type for projectsImages
export const ProjectsTypeImage = PropTypes.objectOf(PropTypes.string).isRequired;