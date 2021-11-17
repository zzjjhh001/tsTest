interface serviceConfig {
  mockProjectId: number,
  opt: opt
}
interface opt {
  systemType: sysType,
  system: sys,
  service: services
}
enum sysType {
  "mac",
  "windows"
}
enum sys {
  "baseArticle",
  "college"
}
enum services {
  "getIds",
  "getNames"
}