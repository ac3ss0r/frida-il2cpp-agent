# frida-il2cpp-agent
Frida Il2cpp agent example using <a href="https://github.com/vfsfitvnm/frida-il2cpp-bridge">frida-il2cpp-bridge</a> library. This project is designed so it can be used on a rooted android device with no need to use PC. It is very useful in unity il2cpp game reverse-engineering when the source is obfuscated.

### Instalation and usage (Android)
Make sure that you have a rooted device and termux with root permissions. Install git, wget, python and nodeJS.
```bash
apt update && apt upgrade
apt install git wget python3 nodejs
```
Install frida for python. Make sure to update pygments to the latest version or frida won't work.
```bash
pkg install root-repo
pkg install frida-python
pip install pygments -U
```
Clone the repository and get frida binary
```bash
git clone https://github.com/acessors/frida-il2cpp-agent
cd frida-il2cpp-agent
wget https://github.com/frida/frida/releases/download/16.0.9/frida-server-16.0.9-android-arm64.xz
unxz frida-server-16.0.9-android-arm64.xz && mv frida-server-16.0.9-android-arm64 frida64
```
Now open a separate terminal and start frida server for your 
```bash
su
chmod +x frida64
./frida64
```
Now frida server is running under root on your device hosted on 127.0.0.1. In the main terminal install project dependencies.
```bash
npm install 
```
It may throw errors with binding.gyp but you should just ignore it. Now you can edit the agent/index.ts file, build it with <b>npm run build</b> and send to target application with <b>frida -l _agent.js -H 127.0.0.1 -f "com.android.package"</b>

### Some examples
<center><img src="https://github.com/acessors/frida-il2cpp-agent/blob/main/sample-trace.png?raw=true"></center>

<center><img src="https://github.com/acessors/frida-il2cpp-agent/blob/main/pg3d-trace.png?raw=true"></center>
