import ApiManager from "../ApiManager";

class CourseService {
  async getAllCourses(config) {
      return await ApiManager.apiGET("/api/v1/course", config);
  }

  async getCourseById(id) {
    return await ApiManager.apiGET(`/api/v1/course/${id}`);
  }
}

export default new CourseService();
