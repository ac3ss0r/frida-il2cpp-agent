import "frida-il2cpp-bridge";



Il2Cpp.perform(() => {
console.log(Il2Cpp.unityVersion);

Il2Cpp.trace()
.assemblies(Il2Cpp.Domain.assembly("Assembly-CSharp"))
.filterClasses(cls => cls.name == "Player_move_c")
.and()
.attach("detailed");

});
