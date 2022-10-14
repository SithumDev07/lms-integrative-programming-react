import ApiManager from "../ApiManager";

class CourseService {
  async getAllCourses() {
    return await ApiManager.apiGET("/api/v1/course");
  }

  async getCourseById(id) {
    return await ApiManager.apiGET(`/api/v1/course/${id}`);
  }
}

export default new CourseService();
