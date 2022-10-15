import ApiManager from "../ApiManager";

class CourseService {
  async getAllCourses(config) {
      return await ApiManager.apiGET("/api/v1/course", config);
  }

  async getCourseById(id) {
    return await ApiManager.apiGET(`/api/v1/course/${id}`);
  }

  async saveCourse(courseDetails) {
    return await ApiManager.apiPOST("/api/v1/course", courseDetails);
  }
}

export default new CourseService();
