import "frida-il2cpp-bridge";

const classes = ["Rocket"];
const methods = [".cctor"]

Il2Cpp.perform(() => {
  console.log(Il2Cpp.unityVersion);
  setTimeout(() => {
    Il2Cpp.trace()
      .assemblies(Il2Cpp.Domain.assembly("Assembly-CSharp"))
      .filterClasses(cls => classes.includes(cls.name))
      .filterMethods(mtd => methods.includes(mtd.name))
      .and()
      .attach("detailed");
  }, 30 * 1000); // we sleep 30 seconds so the application doesn't crash on attach
});
