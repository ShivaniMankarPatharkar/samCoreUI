import http from "../http-common";
class EntitlementService {
  getAll() {
    return http.get(
      "https://entitlementservice-ba3cryd7aq-uc.a.run.app/student-assessment-management/entitlement-service/entitlements"
    );
  }

  get(userid) {
    return http.get(
      `https://entitlementservice-ba3cryd7aq-uc.a.run.app/student-assessment-management/entitlement-service/entitlements/${userid}`
    );
  }

  create(data) {
    return http.post(
      "https://entitlementservice-ba3cryd7aq-uc.a.run.app/student-assessment-management/entitlement-service/entitlements",
      data
    );
  }

  update(data) {
    return http.put(
      `https://entitlementservice-ba3cryd7aq-uc.a.run.app/student-assessment-management/entitlement-service/entitlements`,
      data
    );
  }
}

export default new EntitlementService();
