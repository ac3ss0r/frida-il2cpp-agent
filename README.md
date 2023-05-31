# frida-il2cpp-agent
Frida Il2cpp agent example using <a href="https://github.com/vfsfitvnm/frida-il2cpp-bridge">frida-il2cpp-bridge</a> library. This project is designed so it can be used on a rooted android device with no need to use PC. It is very useful in unity il2cpp game reverse-engineering when the source is obfuscated.

### Instalation and usage (Android)
Make sure that you have a rooted device and termux with root permissions. Install git, wget and nodeJS.
```bash
apt update && apt upgrade
apt install git wget nodejs tsu
```

Clone the agent repository
```bash
git clone https://github.com/acess0r/frida-il2cpp-agent
cd frida-il2cpp-agent/il2cpp-agent
```

Wget the frida-inject binary
```bash
wget https://github.com/frida/frida/releases/download/16.0.19/frida-inject-16.0.19-android-arm64.xz
unxz frida-inject-16.0.19-android-arm64.xz
mv frida-inject-16.0.19-android-arm64 frida64
```

Make it executable
```bash
chmod +x frida64
```

To build the agent first run ``` npm install ``` once, then run ``` npm run build ``` each time you edit the index.ts. To execute the script run
```bash
sudo ./frida64 -s _agent.js -f "com.android.package"
```

### Some examples
<div width=100% align=center>
  <img width=50% src="https://github.com/acessors/frida-il2cpp-agent/blob/main/sample-trace.png?raw=true"/>
  <img width=50% src="https://github.com/acessors/frida-il2cpp-agent/blob/main/pg3d-trace.png?raw=true"/>
</div>
