/**
 * 
 * This is the runtime file. This is in charge of checking the authentication services, cookies as well as handling the launcher -> game services.
 * 
 *  File Version : 1.0.2
 * 
 *  Last Update : Updated CLI statements. All -cp arguments will be required for the runtime client.
 * 
 * 
 * Expected CLI as this was exported from Technic Launcher.
Running C:\\Program Files\\Java\\jre1.8.0_251\\bin\\javaw.exe

-Xms3584m 
-Xmx3584m 
-Djava.library.path=E:\\Technic\\modpacks\\tekxit-3-official-1122\\bin\\natives 
-Dfml.core.libraries.mirror=http://mirror.technicpack.net/Technic/lib/fml/%s 
-Dminecraft.applet.TargetDirectory=E:\\Technic\\modpacks\\tekxit-3-official-1122 
-Duser.language=en 
-XX:HeapDumpPath=MojangTricksIntelDriversForPerformance_javaw.exe_minecraft.exe.heapdump 
-cp E:\\Technic\\cache\\net\\minecraft\\launchwrapper\\1.12\\launchwrapper-1.12.jar;E:\\Technic\\cache\\org\\ow2\\asm\\asm-all\\5.2\\asm-all-5.2.jar;E:\\Technic\\cache\\org\\jline\\jline\\3.5.1\\jline-3.5.1.jar;E:\\Technic\\cache\\net\\java\\dev\\jna\\jna\\4.4.0\\jna-4.4.0.jar;E:\\Technic\\cache\\com\\typesafe\\akka\\akka-actor_2.11\\2.3.3\\akka-actor_2.11-2.3.3.jar;E:\\Technic\\cache\\com\\typesafe\\config\\1.2.1\\config-1.2.1.jar;E:\\Technic\\cache\\org\\scala-lang\\scala-actors-migration_2.11\\1.1.0\\scala-actors-migration_2.11-1.1.0.jar;E:\\Technic\\cache\\org\\scala-lang\\scala-compiler\\2.11.1\\scala-compiler-2.11.1.jar;E:\\Technic\\cache\\org\\scala-lang\\plugins\\scala-continuations-library_2.11\\1.0.2\\scala-continuations-library_2.11-1.0.2.jar;E:\\Technic\\cache\\org\\scala-lang\\plugins\\scala-continuations-plugin_2.11.1\\1.0.2\\scala-continuations-plugin_2.11.1-1.0.2.jar;E:\\Technic\\cache\\org\\scala-lang\\scala-library\\2.11.1\\scala-library-2.11.1.jar;E:\\Technic\\cache\\org\\scala-lang\\scala-parser-combinators_2.11\\1.0.1\\scala-parser-combinators_2.11-1.0.1.jar;E:\\Technic\\cache\\org\\scala-lang\\scala-reflect\\2.11.1\\scala-reflect-2.11.1.jar;E:\\Technic\\cache\\org\\scala-lang\\scala-swing_2.11\\1.0.1\\scala-swing_2.11-1.0.1.jar;E:\\Technic\\cache\\org\\scala-lang\\scala-xml_2.11\\1.0.2\\scala-xml_2.11-1.0.2.jar;E:\\Technic\\cache\\lzma\\lzma\\0.0.1\\lzma-0.0.1.jar;E:\\Technic\\cache\\net\\sf\\jopt-simple\\jopt-simple\\5.0.3\\jopt-simple-5.0.3.jar;E:\\Technic\\cache\\java3d\\vecmath\\1.5.2\\vecmath-1.5.2.jar;E:\\Technic\\cache\\net\\sf\\trove4j\\trove4j\\3.0.3\\trove4j-3.0.3.jar;E:\\Technic\\cache\\org\\apache\\maven\\maven-artifact\\3.5.3\\maven-artifact-3.5.3.jar;E:\\Technic\\cache\\com\\mojang\\patchy\\1.1\\patchy-1.1.jar;E:\\Technic\\cache\\oshi-project\\oshi-core\\1.1\\oshi-core-1.1.jar;E:\\Technic\\cache\\net\\java\\dev\\jna\\jna\\4.4.0\\jna-4.4.0.jar;E:\\Technic\\cache\\net\\java\\dev\\jna\\platform\\3.4.0\\platform-3.4.0.jar;E:\\Technic\\cache\\com\\ibm\\icu\\icu4j-core-mojang\\51.2\\icu4j-core-mojang-51.2.jar;E:\\Technic\\cache\\net\\sf\\jopt-simple\\jopt-simple\\5.0.3\\jopt-simple-5.0.3.jar;E:\\Technic\\cache\\com\\paulscode\\codecjorbis\\20101023\\codecjorbis-20101023.jar;E:\\Technic\\cache\\com\\paulscode\\codecwav\\20101023\\codecwav-20101023.jar;E:\\Technic\\cache\\com\\paulscode\\libraryjavasound\\20101123\\libraryjavasound-20101123.jar;E:\\Technic\\cache\\com\\paulscode\\librarylwjglopenal\\20100824\\librarylwjglopenal-20100824.jar;E:\\Technic\\cache\\com\\paulscode\\soundsystem\\20120107\\soundsystem-20120107.jar;E:\\Technic\\cache\\io\\netty\\netty-all\\4.1.9.Final\\netty-all-4.1.9.Final.jar;E:\\Technic\\cache\\com\\google\\guava\\guava\\21.0\\guava-21.0.jar;E:\\Technic\\cache\\org\\apache\\commons\\commons-lang3\\3.5\\commons-lang3-3.5.jar;E:\\Technic\\cache\\commons-io\\commons-io\\2.5\\commons-io-2.5.jar;E:\\Technic\\cache\\commons-codec\\commons-codec\\1.10\\commons-codec-1.10.jar;E:\\Technic\\cache\\net\\java\\jinput\\jinput\\2.0.5\\jinput-2.0.5.jar;E:\\Technic\\cache\\net\\java\\jutils\\jutils\\1.0.0\\jutils-1.0.0.jar;E:\\Technic\\cache\\com\\google\\code\\gson\\gson\\2.8.0\\gson-2.8.0.jar;E:\\Technic\\cache\\com\\mojang\\authlib\\1.5.25\\authlib-1.5.25.jar;E:\\Technic\\cache\\com\\mojang\\realms\\1.10.22\\realms-1.10.22.jar;E:\\Technic\\cache\\org\\apache\\commons\\commons-compress\\1.8.1\\commons-compress-1.8.1.jar;E:\\Technic\\cache\\org\\apache\\httpcomponents\\httpclient\\4.3.3\\httpclient-4.3.3.jar;E:\\Technic\\cache\\commons-logging\\commons-logging\\1.1.3\\commons-logging-1.1.3.jar;E:\\Technic\\cache\\org\\apache\\httpcomponents\\httpcore\\4.3.2\\httpcore-4.3.2.jar;E:\\Technic\\cache\\it\\unimi\\dsi\\fastutil\\7.1.0\\fastutil-7.1.0.jar;E:\\Technic\\cache\\org\\apache\\logging\\log4j\\log4j-api\\2.8.1\\log4j-api-2.8.1.jar;E:\\Technic\\cache\\org\\apache\\logging\\log4j\\log4j-core\\2.8.1\\log4j-core-2.8.1.jar;E:\\Technic\\cache\\org\\lwjgl\\lwjgl\\lwjgl\\2.9.4-nightly-20150209\\lwjgl-2.9.4-nightly-20150209.jar;E:\\Technic\\cache\\org\\lwjgl\\lwjgl\\lwjgl_util\\2.9.4-nightly-20150209\\lwjgl_util-2.9.4-nightly-20150209.jar;E:\\Technic\\cache\\com\\mojang\\text2speech\\1.10.3\\text2speech-1.10.3.jar;E:\\Technic\\modpacks\\tekxit-3-official-1122\\bin\\modpack.jar;E:\\Technic\\modpacks\\tekxit-3-official-1122\\bin\\minecraft.jar net.minecraft.launchwrapper.Launch 
--username IAmRedi 
--version 1.12.2-forge1.12.2-14.23.5.2847 
--gameDir E:\\Technic\\modpacks\\tekxit-3-official-1122 
--assetsDir E:\\Technic\\assets 
--assetIndex 1.12 
--uuid eb80969289fc47ea952b656f3be21699 
--accessToken redacted 
--userType mojang 
--tweakClass net.minecraftforge.fml.common.launcher.FMLTweaker 
--versionType Forge release 
--title Tekxit 3 (Official) 1.12.2 
--icon E:\\Technic\\assets\\packs\\tekxit-3-official-1122\\icon.png


CP = LaunchWrapper
    asm-all-5.2.jar (E:\\Technic\\cache\\org\\ow2\\asm\\asm-all\\5.2\\asm-all-5.2.jar)
    jline-3.5.1.jar (E:\\Technic\\cache\\org\\jline\\jline\\3.5.1\\jline-3.5.1.jar)
    jna-4.4.0.jar (E:\\Technic\\cache\\net\\java\\dev\\jna\\jna\\4.4.0\\jna-4.4.0.jar;)

    


java -jar -Xms3584m  -Xmx3584m -Djava.library.path=E:\\Test Client\\Forge Files\\Instance\\runtime\\natives -Dfml.core.libraries.mirror=http://mirror.technicpack.net/Technic/lib/fml/%s -Dminecraft.applet.TargetDirectory=E:\\Test Client\\Forge Files\\Instance -Duser.language=en -XX:HeapDumpPath=MojangTricksIntelDriversForPerformance_javaw.exe_minecraft.exe.heapdump -cp E:\\Test Client\\Forge Files\\Launcher Assets\\libs\\net\\minecraft\\launchwrapper\\1.12\\launchwrapper-1.12.jar;E:\\Test Client\\Forge Files\\Launcher Assets\\libs\\org\\ow2\\asm\\asm-all\\5.2\\asm-all-5.2.jar;E:\\Test Client\\Forge Files\\Launcher Assets\\libs\\org\\jline\\jline\\3.5.1\\jline-3.5.1.jar;E:\\Test Client\\Forge Files\\Launcher Assets\\libs\\net\\java\\dev\\jna\\jna\\4.4.0\\jna-4.4.0.jar;E:\\Test Client\\Forge Files\\Launcher Assets\\libs\\com\\typesafe\\akka\\akka-actor_2.11\\2.3.3\\akka-actor_2.11-2.3.3.jar;E:\\Test Client\\Forge Files\\Launcher Assets\\libs\\com\\typesafe\\config\\1.2.1\\config-1.2.1.jar;E:\\Test Client\\Forge Files\\Launcher Assets\\libs\\org\\scala-lang\\scala-actors-migration_2.11\\1.1.0\\scala-actors-migration_2.11-1.1.0.jar;E:\\Test Client\\Forge Files\\Launcher Assets\\libs\\org\\scala-lang\\scala-compiler\\2.11.1\\scala-compiler-2.11.1.jar;E:\\Test Client\\Forge Files\\Launcher Assets\\libs\\org\\scala-lang\\plugins\\scala-continuations-library_2.11\\1.0.2\\scala-continuations-library_2.11-1.0.2.jar;E:\\Test Client\\Forge Files\\Launcher Assets\\libs\\org\\scala-lang\\plugins\\scala-continuations-plugin_2.11.1\\1.0.2\\scala-continuations-plugin_2.11.1-1.0.2.jar;E:\\Test Client\\Forge Files\\Launcher Assets\\libs\\org\\scala-lang\\scala-library\\2.11.1\\scala-library-2.11.1.jar;E:\\Test Client\\Forge Files\\Launcher Assets\\libs\\org\\scala-lang\\scala-parser-combinators_2.11\\1.0.1\\scala-parser-combinators_2.11-1.0.1.jar;E:\\Test Client\\Forge Files\\Launcher Assets\\libs\\org\\scala-lang\\scala-reflect\\2.11.1\\scala-reflect-2.11.1.jar;E:\\Test Client\\Forge Files\\Launcher Assets\\libs\\org\\scala-lang\\scala-swing_2.11\\1.0.1\\scala-swing_2.11-1.0.1.jar;E:\\Test Client\\Forge Files\\Launcher Assets\\libs\\org\\scala-lang\\scala-xml_2.11\\1.0.2\\scala-xml_2.11-1.0.2.jar;E:\\Test Client\\Forge Files\\Launcher Assets\\libs\\lzma\\lzma\\0.0.1\\lzma-0.0.1.jar;E:\\Test Client\\Forge Files\\Launcher Assets\\libs\\net\\sf\\jopt-simple\\jopt-simple\\5.0.3\\jopt-simple-5.0.3.jar;E:\\Test Client\\Forge Files\\Launcher Assets\\libs\\java3d\\vecmath\\1.5.2\\vecmath-1.5.2.jar;E:\\Test Client\\Forge Files\\Launcher Assets\\libs\\net\\sf\\trove4j\\trove4j\\3.0.3\\trove4j-3.0.3.jar;E:\\Test Client\\Forge Files\\Launcher Assets\\libs\\org\\apache\\maven\\maven-artifact\\3.5.3\\maven-artifact-3.5.3.jar;E:\\Test Client\\Forge Files\\Launcher Assets\\libs\\com\\mojang\\patchy\\1.1\\patchy-1.1.jar;E:\\Test Client\\Forge Files\\Launcher Assets\\libs\\oshi-project\\oshi-core\\1.1\\oshi-core-1.1.jar;E:\\Test Client\\Forge Files\\Launcher Assets\\libs\\net\\java\\dev\\jna\\jna\\4.4.0\\jna-4.4.0.jar;E:\\Test Client\\Forge Files\\Launcher Assets\\libs\\net\\java\\dev\\jna\\platform\\3.4.0\\platform-3.4.0.jar;E:\\Test Client\\Forge Files\\Launcher Assets\\libs\\com\\ibm\\icu\\icu4j-core-mojang\\51.2\\icu4j-core-mojang-51.2.jar;E:\\Test Client\\Forge Files\\Launcher Assets\\libs\\net\\sf\\jopt-simple\\jopt-simple\\5.0.3\\jopt-simple-5.0.3.jar;E:\\Test Client\\Forge Files\\Launcher Assets\\libs\\com\\paulscode\\codecjorbis\\20101023\\codecjorbis-20101023.jar;E:\\Test Client\\Forge Files\\Launcher Assets\\libs\\com\\paulscode\\codecwav\\20101023\\codecwav-20101023.jar;E:\\Test Client\\Forge Files\\Launcher Assets\\libs\\com\\paulscode\\libraryjavasound\\20101123\\libraryjavasound-20101123.jar;E:\\Test Client\\Forge Files\\Launcher Assets\\libs\\com\\paulscode\\librarylwjglopenal\\20100824\\librarylwjglopenal-20100824.jar;E:\\Test Client\\Forge Files\\Launcher Assets\\libs\\com\\paulscode\\soundsystem\\20120107\\soundsystem-20120107.jar;E:\\Test Client\\Forge Files\\Launcher Assets\\libs\\io\\netty\\netty-all\\4.1.9.Final\\netty-all-4.1.9.Final.jar;E:\\Test Client\\Forge Files\\Launcher Assets\\libs\\com\\google\\guava\\guava\\21.0\\guava-21.0.jar;E:\\Test Client\\Forge Files\\Launcher Assets\\libs\\org\\apache\\commons\\commons-lang3\\3.5\\commons-lang3-3.5.jar;E:\\Test Client\\Forge Files\\Launcher Assets\\libs\\commons-io\\commons-io\\2.5\\commons-io-2.5.jar;E:\\Test Client\\Forge Files\\Launcher Assets\\libs\\commons-codec\\commons-codec\\1.10\\commons-codec-1.10.jar;E:\\Test Client\\Forge Files\\Launcher Assets\\libs\\net\\java\\jinput\\jinput\\2.0.5\\jinput-2.0.5.jar;E:\\Test Client\\Forge Files\\Launcher Assets\\libs\\net\\java\\jutils\\jutils\\1.0.0\\jutils-1.0.0.jar;E:\\Test Client\\Forge Files\\Launcher Assets\\libs\\com\\google\\code\\gson\\gson\\2.8.0\\gson-2.8.0.jar;E:\\Test Client\\Forge Files\\Launcher Assets\\libs\\com\\mojang\\authlib\\1.5.25\\authlib-1.5.25.jar;E:\\Test Client\\Forge Files\\Launcher Assets\\libs\\com\\mojang\\realms\\1.10.22\\realms-1.10.22.jar;E:\\Test Client\\Forge Files\\Launcher Assets\\libs\\org\\apache\\commons\\commons-compress\\1.8.1\\commons-compress-1.8.1.jar;E:\\Test Client\\Forge Files\\Launcher Assets\\libs\\org\\apache\\httpcomponents\\httpclient\\4.3.3\\httpclient-4.3.3.jar;E:\\Test Client\\Forge Files\\Launcher Assets\\libs\\commons-logging\\commons-logging\\1.1.3\\commons-logging-1.1.3.jar;E:\\Test Client\\Forge Files\\Launcher Assets\\libs\\org\\apache\\httpcomponents\\httpcore\\4.3.2\\httpcore-4.3.2.jar;E:\\Test Client\\Forge Files\\Launcher Assets\\libs\\it\\unimi\\dsi\\fastutil\\7.1.0\\fastutil-7.1.0.jar;E:\\Test Client\\Forge Files\\Launcher Assets\\libs\\org\\apache\\logging\\log4j\\log4j-api\\2.8.1\\log4j-api-2.8.1.jar;E:\\Test Client\\Forge Files\\Launcher Assets\\libs\\org\\apache\\logging\\log4j\\log4j-core\\2.8.1\\log4j-core-2.8.1.jar;E:\\Test Client\\Forge Files\\Launcher Assets\\libs\\org\\lwjgl\\lwjgl\\lwjgl\\2.9.4-nightly-20150209\\lwjgl-2.9.4-nightly-20150209.jar;E:\\Test Client\\Forge Files\\Launcher Assets\\libs\\org\\lwjgl\\lwjgl\\lwjgl_util\\2.9.4-nightly-20150209\\lwjgl_util-2.9.4-nightly-20150209.jar;E:\\Test Client\\Forge Files\\Launcher Assets\\libs\\com\\mojang\\text2speech\\1.10.3\\text2speech-1.10.3.jar;E:\\Test Client\\Forge Files\\Instance\\runtime\\modpack.jar;E:\\Test Client\\Forge Files\\Instance\\runtime\\minecraft.jar net.minecraft.launchwrapper.Launch --username IAmRedi --version 1.15.2-forge-1.15.2-31.2.0 --gameDir E:\\Test Client\\Forge Files\\Instance --assetsDir E:\\Test Client\\Forge Files\\Launcher Assets\\assets --assetIndex 1.15.2 --uuid eb80969289fc47ea952b656f3be21699 --accessToken redacted --userType mojang --tweakClass net.minecraftforge.fml.common.launcher.FMLTweaker --versionType Forge release --title Velox Reloaded [1.15.2]

*/

// Set arguments:
const createArguments = async () => {
    const fs = require('fs');
    const atsume = require('./atsumeLib.js');
    const serviceCrypto = require('./encrypt.js');
    const moment = require('moment');
    const mojang = require('./server.js')

    let arguments;

    if (fs.existsSync(`${process.env.APPDATA}/devpanda/client/profile/memory.json`)) {
        atsume.logger(`INFO`, `[Runtime Manager @ args]: Memory profiler was detected. Loading arguments into the module.`)

        if (!fs.existsSync(`${process.env.APPDATA}/devpanda/client/profile/auth.json`)) {
            alert(`Failed to find the authentication details. Please relaunch your application to generate the pre-requisites services.`)
            window.close();
        }

        // Bring over our JSON data.
        let processDetailsRaw = await fs.readFileSync(`${process.env.APPDATA}/devpanda/client/session.json`, 'utf8');
        let processDetails = JSON.parse(processDetailsRaw);

        let token = processDetails.token;
        let tethered1 = processDetails.username;
        let tethered2 = processDetails.uuid;

        let timeout = processDetails.date;

        // Time math.
        let now = moment();
        let app = moment(timeout);

        if (now.diff(app) > 1200000 || !fs.existsSync(`${process.env.APPDATA}/devpanda/client/session.json`)) {
            // Session is voided as invalid.
            let callback = mojang.authenticator();

            // Regather new JSON data.

            // Replace existing variables.
            tethered1 = callback.username;
            tethered2 = callback.id
            token = callback.accessToken;
        }

        // Debug variables

        // Lets predefine our constructors here aye?
        let version = '1.15.2';
        let userType = 'mojang';
        let username = tethered1;
        let accessToken = token;
        let uuid = tethered2;
        // let gameDirectory = gamedir; Deprecated
        // let libraries = libdir; Deprecated
        let gameTitle = "THE BEST MODPACK EVER";
        let assetIndex = '1.15.2';

        // Lets define our memory configurations.

        let settingsRaw = await fs.readFileSync(`${process.env.APPDATA}/devpanda/client/profile/memory.json`, 'utf8')
        let settings = JSON.parse(settingsRaw)
        let minRAM = settings.minimumRAM;
        let maxRAM = settings.maximumRAM;

        arguments = `java -XX:HeapDumpPath=MojangTricksIntelDriversForPerformance_javaw.exe_minecraft.exe.heapdump -Djava.library.path=${process.env.APPDATA}\\devpanda\\instance\\bin\\natives -Dminecraft.launcher.brand=technic -Dminecraft.launcher.version=4.546 -cp ${process.env.APPDATA}\\devpanda\\libraries\\org\\ow2\\asm\\asm\\7.2\\asm-7.2.jar;${process.env.APPDATA}\\devpanda\\libraries\\org\\ow2\\asm\\asm-commons\\7.2\\asm-commons-7.2.jar;${process.env.APPDATA}\\devpanda\\libraries\\org\\ow2\\asm\\asm-tree\\7.2\\asm-tree-7.2.jar;${process.env.APPDATA}\\devpanda\\libraries\\cpw\\mods\\modlauncher\\5.1.0\\modlauncher-5.1.0.jar;${process.env.APPDATA}\\devpanda\\libraries\\cpw\\mods\\grossjava9hacks\\1.3.0\\grossjava9hacks-1.3.0.jar;${process.env.APPDATA}\\devpanda\\libraries\\net\\minecraftforge\\accesstransformers\\2.1.1\\accesstransformers-2.1.1-shadowed.jar;${process.env.APPDATA}\\devpanda\\libraries\\net\\minecraftforge\\eventbus\\2.1.0\\eventbus-2.1.0-service.jar;${process.env.APPDATA}\\devpanda\\libraries\\net\\minecraftforge\\forgespi\\2.1.2\\forgespi-2.1.2.jar;${process.env.APPDATA}\\devpanda\\libraries\\net\\minecraftforge\\coremods\\2.0.3\\coremods-2.0.3.jar;${process.env.APPDATA}\\devpanda\\libraries\\net\\minecraftforge\\unsafe\\0.2.0\\unsafe-0.2.0.jar;${process.env.APPDATA}\\devpanda\\libraries\\com\\electronwill\\night-config\\core\\3.6.2\\core-3.6.2.jar;${process.env.APPDATA}\\devpanda\\libraries\\com\\electronwill\\night-config\\toml\\3.6.2\\toml-3.6.2.jar;${process.env.APPDATA}\\devpanda\\libraries\\org\\jline\\jline\\3.12.1\\jline-3.12.1.jar;${process.env.APPDATA}\\devpanda\\libraries\\org\\apache\\maven\\maven-artifact\\3.6.0\\maven-artifact-3.6.0.jar;${process.env.APPDATA}\\devpanda\\libraries\\net\\jodah\\typetools\\0.6.1\\typetools-0.6.1.jar;${process.env.APPDATA}\\devpanda\\libraries\\org\\apache\\logging\\log4j\\log4j-api\\2.11.2\\log4j-api-2.11.2.jar;${process.env.APPDATA}\\devpanda\\libraries\\org\\apache\\logging\\log4j\\log4j-core\\2.11.2\\log4j-core-2.11.2.jar;${process.env.APPDATA}\\devpanda\\libraries\\net\\minecrell\\terminalconsoleappender\\1.2.0\\terminalconsoleappender-1.2.0.jar;${process.env.APPDATA}\\devpanda\\libraries\\net\\sf\\jopt-simple\\jopt-simple\\5.0.4\\jopt-simple-5.0.4.jar;${process.env.APPDATA}\\devpanda\\libraries\\io\\github\\zekerzhayard\\ForgeWrapper\\1.4.1\\ForgeWrapper-1.4.1.jar;${process.env.APPDATA}\\devpanda\\libraries\\net\\minecraftforge\\forge\\1.15.2-31.1.77\\forge-1.15.2-31.1.77-launcher.jar;${process.env.APPDATA}\\devpanda\\libraries\\com\\mojang\\patchy\\1.1\\patchy-1.1.jar;${process.env.APPDATA}\\devpanda\\libraries\\oshi-project\\oshi-core\\1.1\\oshi-core-1.1.jar;${process.env.APPDATA}\\devpanda\\libraries\\net\\java\\dev\\jna\\jna\\4.4.0\\jna-4.4.0.jar;${process.env.APPDATA}\\devpanda\\libraries\\net\\java\\dev\\jna\\platform\\3.4.0\\platform-3.4.0.jar;${process.env.APPDATA}\\devpanda\\libraries\\com\\ibm\\icu\\icu4j-core-mojang\\51.2\\icu4j-core-mojang-51.2.jar;${process.env.APPDATA}\\devpanda\\libraries\\com\\mojang\\javabridge\\1.0.22\\javabridge-1.0.22.jar;${process.env.APPDATA}\\devpanda\\libraries\\net\\sf\\jopt-simple\\jopt-simple\\5.0.3\\jopt-simple-5.0.3.jar;${process.env.APPDATA}\\devpanda\\libraries\\io\\netty\\netty-all\\4.1.25.Final\\netty-all-4.1.25.Final.jar;${process.env.APPDATA}\\devpanda\\libraries\\com\\google\\guava\\guava\\21.0\\guava-21.0.jar;${process.env.APPDATA}\\devpanda\\libraries\\org\\apache\\commons\\commons-lang3\\3.5\\commons-lang3-3.5.jar;${process.env.APPDATA}\\devpanda\\libraries\\commons-io\\commons-io\\2.5\\commons-io-2.5.jar;${process.env.APPDATA}\\devpanda\\libraries\\commons-codec\\commons-codec\\1.10\\commons-codec-1.10.jar;${process.env.APPDATA}\\devpanda\\libraries\\net\\java\\jinput\\jinput\\2.0.5\\jinput-2.0.5.jar;${process.env.APPDATA}\\devpanda\\libraries\\net\\java\\jutils\\jutils\\1.0.0\\jutils-1.0.0.jar;${process.env.APPDATA}\\devpanda\\libraries\\com\\mojang\\brigadier\\1.0.17\\brigadier-1.0.17.jar;${process.env.APPDATA}\\devpanda\\libraries\\com\\mojang\\datafixerupper\\2.0.24\\datafixerupper-2.0.24.jar;${process.env.APPDATA}\\devpanda\\libraries\\com\\google\\code\\gson\\gson\\2.8.0\\gson-2.8.0.jar;${process.env.APPDATA}\\devpanda\\libraries\\com\\mojang\\authlib\\1.5.25\\authlib-1.5.25.jar;${process.env.APPDATA}\\devpanda\\libraries\\org\\apache\\commons\\commons-compress\\1.8.1\\commons-compress-1.8.1.jar;${process.env.APPDATA}\\devpanda\\libraries\\org\\apache\\httpcomponents\\httpclient\\4.3.3\\httpclient-4.3.3.jar;${process.env.APPDATA}\\devpanda\\libraries\\commons-logging\\commons-logging\\1.1.3\\commons-logging-1.1.3.jar;${process.env.APPDATA}\\devpanda\\libraries\\org\\apache\\httpcomponents\\httpcore\\4.3.2\\httpcore-4.3.2.jar;${process.env.APPDATA}\\devpanda\\libraries\\it\\unimi\\dsi\\fastutil\\8.2.1\\fastutil-8.2.1.jar;${process.env.APPDATA}\\devpanda\\libraries\\org\\apache\\logging\\log4j\\log4j-api\\2.8.1\\log4j-api-2.8.1.jar;${process.env.APPDATA}\\devpanda\\libraries\\org\\apache\\logging\\log4j\\log4j-core\\2.8.1\\log4j-core-2.8.1.jar;${process.env.APPDATA}\\devpanda\\libraries\\org\\lwjgl\\lwjgl\\3.2.2\\lwjgl-3.2.2.jar;${process.env.APPDATA}\\devpanda\\libraries\\org\\lwjgl\\lwjgl-jemalloc\\3.2.2\\lwjgl-jemalloc-3.2.2.jar;${process.env.APPDATA}\\devpanda\\libraries\\org\\lwjgl\\lwjgl-openal\\3.2.2\\lwjgl-openal-3.2.2.jar;${process.env.APPDATA}\\devpanda\\libraries\\org\\lwjgl\\lwjgl-opengl\\3.2.2\\lwjgl-opengl-3.2.2.jar;${process.env.APPDATA}\\devpanda\\libraries\\org\\lwjgl\\lwjgl-glfw\\3.2.2\\lwjgl-glfw-3.2.2.jar;${process.env.APPDATA}\\devpanda\\libraries\\org\\lwjgl\\lwjgl-stb\\3.2.2\\lwjgl-stb-3.2.2.jar;${process.env.APPDATA}\\devpanda\\libraries\\org\\lwjgl\\lwjgl-tinyfd\\3.2.2\\lwjgl-tinyfd-3.2.2.jar;${process.env.APPDATA}\\devpanda\\libraries\\com\\mojang\\text2speech\\1.11.3\\text2speech-1.11.3.jar;${process.env.APPDATA}\\devpanda\\instancebin\\minecraft.jar -Xms${minRAM}m -Xmx${maxRAM}m -Dfml.core.libraries.mirror=http://mirror.technicpack.net/Technic/lib/fml/%s -Dminecraft.applet.TargetDirectory=${process.env.APPDATA}\\devpanda\\instance -Duser.language=en io.github.zekerzhayard.forgewrapper.installer.Main --launchTarget fmlclient --fml.forgeVersion 31.1.77 --fml.mcVersion 1.15.2 --fml.forgeGroup net.minecraftforge --fml.mcpVersion 20200414.225201 --username ${username} --version 1.15.2-forge-31.1.77 --gameDir ${process.env.APPDATA}\\devpanda\\instance\\ --assetsDir ${process.env.APPDATA}\\devpanda\\assets\\ --assetIndex 1.15 --uuid ${uuid} --accessToken ${accessToken} --userType ${userType} --versionType release --title Forge 1.15.2 - Slate --icon ${process.env.APPDATA}\\devpanda\\assets\\packs\\forge-1152-slate\\icon.png`;

        // demoargs = "java -XX:HeapDumpPath=MojangTricksIntelDriversForPerformance_javaw.exe_minecraft.exe.heapdump -Djava.library.path=${process.env.APPDATA}\\devpanda\\instance\\bin\\natives -Dminecraft.launcher.brand=technic -Dminecraft.launcher.version=4.546 -cp ${process.env.APPDATA}\\devpanda\\libraries\\org\\ow2\\asm\\asm\\7.2\\asm-7.2.jar;${process.env.APPDATA}\\devpanda\\libraries\\org\\ow2\\asm\\asm-commons\\7.2\\asm-commons-7.2.jar;${process.env.APPDATA}\\devpanda\\libraries\\org\\ow2\\asm\\asm-tree\\7.2\\asm-tree-7.2.jar;${process.env.APPDATA}\\devpanda\\libraries\\cpw\\mods\\modlauncher\\5.1.0\\modlauncher-5.1.0.jar;${process.env.APPDATA}\\devpanda\\libraries\\cpw\\mods\\grossjava9hacks\\1.3.0\\grossjava9hacks-1.3.0.jar;${process.env.APPDATA}\\devpanda\\libraries\\net\\minecraftforge\\accesstransformers\\2.1.1\\accesstransformers-2.1.1-shadowed.jar;${process.env.APPDATA}\\devpanda\\libraries\\net\\minecraftforge\\eventbus\\2.1.0\\eventbus-2.1.0-service.jar;${process.env.APPDATA}\\devpanda\\libraries\\net\\minecraftforge\\forgespi\\2.1.2\\forgespi-2.1.2.jar;${process.env.APPDATA}\\devpanda\\libraries\\net\\minecraftforge\\coremods\\2.0.3\\coremods-2.0.3.jar;${process.env.APPDATA}\\devpanda\\libraries\\net\\minecraftforge\\unsafe\\0.2.0\\unsafe-0.2.0.jar;${process.env.APPDATA}\\devpanda\\libraries\\com\\electronwill\\night-config\\core\\3.6.2\\core-3.6.2.jar;${process.env.APPDATA}\\devpanda\\libraries\\com\\electronwill\\night-config\\toml\\3.6.2\\toml-3.6.2.jar;${process.env.APPDATA}\\devpanda\\libraries\\org\\jline\\jline\\3.12.1\\jline-3.12.1.jar;${process.env.APPDATA}\\devpanda\\libraries\\org\\apache\\maven\\maven-artifact\\3.6.0\\maven-artifact-3.6.0.jar;${process.env.APPDATA}\\devpanda\\libraries\\net\\jodah\\typetools\\0.6.1\\typetools-0.6.1.jar;${process.env.APPDATA}\\devpanda\\libraries\\org\\apache\\logging\\log4j\\log4j-api\\2.11.2\\log4j-api-2.11.2.jar;${process.env.APPDATA}\\devpanda\\libraries\\org\\apache\\logging\\log4j\\log4j-core\\2.11.2\\log4j-core-2.11.2.jar;${process.env.APPDATA}\\devpanda\\libraries\\net\\minecrell\\terminalconsoleappender\\1.2.0\\terminalconsoleappender-1.2.0.jar;${process.env.APPDATA}\\devpanda\\libraries\\net\\sf\\jopt-simple\\jopt-simple\\5.0.4\\jopt-simple-5.0.4.jar;${process.env.APPDATA}\\devpanda\\libraries\\io\\github\\zekerzhayard\\ForgeWrapper\\1.4.1\\ForgeWrapper-1.4.1.jar;${process.env.APPDATA}\\devpanda\\libraries\\net\\minecraftforge\\forge\\1.15.2-31.1.77\\forge-1.15.2-31.1.77-launcher.jar;${process.env.APPDATA}\\devpanda\\libraries\\com\\mojang\\patchy\\1.1\\patchy-1.1.jar;${process.env.APPDATA}\\devpanda\\libraries\\oshi-project\\oshi-core\\1.1\\oshi-core-1.1.jar;${process.env.APPDATA}\\devpanda\\libraries\\net\\java\\dev\\jna\\jna\\4.4.0\\jna-4.4.0.jar;${process.env.APPDATA}\\devpanda\\libraries\\net\\java\\dev\\jna\\platform\\3.4.0\\platform-3.4.0.jar;${process.env.APPDATA}\\devpanda\\libraries\\com\\ibm\\icu\\icu4j-core-mojang\\51.2\\icu4j-core-mojang-51.2.jar;${process.env.APPDATA}\\devpanda\\libraries\\com\\mojang\\javabridge\\1.0.22\\javabridge-1.0.22.jar;${process.env.APPDATA}\\devpanda\\libraries\\net\\sf\\jopt-simple\\jopt-simple\\5.0.3\\jopt-simple-5.0.3.jar;${process.env.APPDATA}\\devpanda\\libraries\\io\\netty\\netty-all\\4.1.25.Final\\netty-all-4.1.25.Final.jar;${process.env.APPDATA}\\devpanda\\libraries\\com\\google\\guava\\guava\\21.0\\guava-21.0.jar;${process.env.APPDATA}\\devpanda\\libraries\\org\\apache\\commons\\commons-lang3\\3.5\\commons-lang3-3.5.jar;${process.env.APPDATA}\\devpanda\\libraries\\commons-io\\commons-io\\2.5\\commons-io-2.5.jar;${process.env.APPDATA}\\devpanda\\libraries\\commons-codec\\commons-codec\\1.10\\commons-codec-1.10.jar;${process.env.APPDATA}\\devpanda\\libraries\\net\\java\\jinput\\jinput\\2.0.5\\jinput-2.0.5.jar;${process.env.APPDATA}\\devpanda\\libraries\\net\\java\\jutils\\jutils\\1.0.0\\jutils-1.0.0.jar;${process.env.APPDATA}\\devpanda\\libraries\\com\\mojang\\brigadier\\1.0.17\\brigadier-1.0.17.jar;${process.env.APPDATA}\\devpanda\\libraries\\com\\mojang\\datafixerupper\\2.0.24\\datafixerupper-2.0.24.jar;${process.env.APPDATA}\\devpanda\\libraries\\com\\google\\code\\gson\\gson\\2.8.0\\gson-2.8.0.jar;${process.env.APPDATA}\\devpanda\\libraries\\com\\mojang\\authlib\\1.5.25\\authlib-1.5.25.jar;${process.env.APPDATA}\\devpanda\\libraries\\org\\apache\\commons\\commons-compress\\1.8.1\\commons-compress-1.8.1.jar;${process.env.APPDATA}\\devpanda\\libraries\\org\\apache\\httpcomponents\\httpclient\\4.3.3\\httpclient-4.3.3.jar;${process.env.APPDATA}\\devpanda\\libraries\\commons-logging\\commons-logging\\1.1.3\\commons-logging-1.1.3.jar;${process.env.APPDATA}\\devpanda\\libraries\\org\\apache\\httpcomponents\\httpcore\\4.3.2\\httpcore-4.3.2.jar;${process.env.APPDATA}\\devpanda\\libraries\\it\\unimi\\dsi\\fastutil\\8.2.1\\fastutil-8.2.1.jar;${process.env.APPDATA}\\devpanda\\libraries\\org\\apache\\logging\\log4j\\log4j-api\\2.8.1\\log4j-api-2.8.1.jar;${process.env.APPDATA}\\devpanda\\libraries\\org\\apache\\logging\\log4j\\log4j-core\\2.8.1\\log4j-core-2.8.1.jar;${process.env.APPDATA}\\devpanda\\libraries\\org\\lwjgl\\lwjgl\\3.2.2\\lwjgl-3.2.2.jar;${process.env.APPDATA}\\devpanda\\libraries\\org\\lwjgl\\lwjgl-jemalloc\\3.2.2\\lwjgl-jemalloc-3.2.2.jar;${process.env.APPDATA}\\devpanda\\libraries\\org\\lwjgl\\lwjgl-openal\\3.2.2\\lwjgl-openal-3.2.2.jar;${process.env.APPDATA}\\devpanda\\libraries\\org\\lwjgl\\lwjgl-opengl\\3.2.2\\lwjgl-opengl-3.2.2.jar;${process.env.APPDATA}\\devpanda\\libraries\\org\\lwjgl\\lwjgl-glfw\\3.2.2\\lwjgl-glfw-3.2.2.jar;${process.env.APPDATA}\\devpanda\\libraries\\org\\lwjgl\\lwjgl-stb\\3.2.2\\lwjgl-stb-3.2.2.jar;${process.env.APPDATA}\\devpanda\\libraries\\org\\lwjgl\\lwjgl-tinyfd\\3.2.2\\lwjgl-tinyfd-3.2.2.jar;${process.env.APPDATA}\\devpanda\\libraries\\com\\mojang\\text2speech\\1.11.3\\text2speech-1.11.3.jar;${process.env.APPDATA}\\devpanda\\instancebin\\minecraft.jar -Xms3584m -Xmx3584m -Dfml.core.libraries.mirror=http://mirror.technicpack.net/Technic/lib/fml/%s -Dminecraft.applet.TargetDirectory=${process.env.APPDATA}\\devpanda\\instance -Duser.language=en io.github.zekerzhayard.forgewrapper.installer.Main --launchTarget fmlclient --fml.forgeVersion 31.1.77 --fml.mcVersion 1.15.2 --fml.forgeGroup net.minecraftforge --fml.mcpVersion 20200414.225201 --username LightningIce9 --version 1.15.2-forge-31.1.77 --gameDir ${process.env.APPDATA}\\devpanda\\instance\\ --assetsDir ${process.env.APPDATA}\\devpanda\\assets\\ --assetIndex 1.15 --uuid 15a658d6084f48d2b606a6f34cb0db37 --accessToken redacted --userType mojang --versionType release --title Forge 1.15.2 - Slate --icon ${process.env.APPDATA}\\devpanda\\assets\\packs\\forge-1152-slate\\icon.png";

    } else {

        atsume.logger(`ERROR`, `[Runtime Manager @ args]: Couldn't load the memory parameters configuration.`);
        alert(`There was an issue running the Runtime Service. Please contact Redi for additional assistance.`);
        return new Error(`Could not load memory parameters.`);

    }

    return arguments;
}

const runApplication = (arguments) => {
    // let demoargs = `java -XX:HeapDumpPath=MojangTricksIntelDriversForPerformance_javaw.exe_minecraft.exe.heapdump -Djava.library.path=${process.env.APPDATA}\\devpanda\\instance\\bin\\natives -Dminecraft.launcher.brand=technic -Dminecraft.launcher.version=4.546 -cp ${process.env.APPDATA}\\devpanda\\libraries\\org\\ow2\\asm\\asm\\7.2\\asm-7.2.jar;${process.env.APPDATA}\\devpanda\\libraries\\org\\ow2\\asm\\asm-commons\\7.2\\asm-commons-7.2.jar;${process.env.APPDATA}\\devpanda\\libraries\\org\\ow2\\asm\\asm-tree\\7.2\\asm-tree-7.2.jar;${process.env.APPDATA}\\devpanda\\libraries\\cpw\\mods\\modlauncher\\5.1.0\\modlauncher-5.1.0.jar;${process.env.APPDATA}\\devpanda\\libraries\\cpw\\mods\\grossjava9hacks\\1.3.0\\grossjava9hacks-1.3.0.jar;${process.env.APPDATA}\\devpanda\\libraries\\net\\minecraftforge\\accesstransformers\\2.1.1\\accesstransformers-2.1.1-shadowed.jar;${process.env.APPDATA}\\devpanda\\libraries\\net\\minecraftforge\\eventbus\\2.1.0\\eventbus-2.1.0-service.jar;${process.env.APPDATA}\\devpanda\\libraries\\net\\minecraftforge\\forgespi\\2.1.2\\forgespi-2.1.2.jar;${process.env.APPDATA}\\devpanda\\libraries\\net\\minecraftforge\\coremods\\2.0.3\\coremods-2.0.3.jar;${process.env.APPDATA}\\devpanda\\libraries\\net\\minecraftforge\\unsafe\\0.2.0\\unsafe-0.2.0.jar;${process.env.APPDATA}\\devpanda\\libraries\\com\\electronwill\\night-config\\core\\3.6.2\\core-3.6.2.jar;${process.env.APPDATA}\\devpanda\\libraries\\com\\electronwill\\night-config\\toml\\3.6.2\\toml-3.6.2.jar;${process.env.APPDATA}\\devpanda\\libraries\\org\\jline\\jline\\3.12.1\\jline-3.12.1.jar;${process.env.APPDATA}\\devpanda\\libraries\\org\\apache\\maven\\maven-artifact\\3.6.0\\maven-artifact-3.6.0.jar;${process.env.APPDATA}\\devpanda\\libraries\\net\\jodah\\typetools\\0.6.1\\typetools-0.6.1.jar;${process.env.APPDATA}\\devpanda\\libraries\\org\\apache\\logging\\log4j\\log4j-api\\2.11.2\\log4j-api-2.11.2.jar;${process.env.APPDATA}\\devpanda\\libraries\\org\\apache\\logging\\log4j\\log4j-core\\2.11.2\\log4j-core-2.11.2.jar;${process.env.APPDATA}\\devpanda\\libraries\\net\\minecrell\\terminalconsoleappender\\1.2.0\\terminalconsoleappender-1.2.0.jar;${process.env.APPDATA}\\devpanda\\libraries\\net\\sf\\jopt-simple\\jopt-simple\\5.0.4\\jopt-simple-5.0.4.jar;${process.env.APPDATA}\\devpanda\\libraries\\io\\github\\zekerzhayard\\ForgeWrapper\\1.4.1\\ForgeWrapper-1.4.1.jar;${process.env.APPDATA}\\devpanda\\libraries\\net\\minecraftforge\\forge\\1.15.2-31.1.77\\forge-1.15.2-31.1.77-launcher.jar;${process.env.APPDATA}\\devpanda\\libraries\\com\\mojang\\patchy\\1.1\\patchy-1.1.jar;${process.env.APPDATA}\\devpanda\\libraries\\oshi-project\\oshi-core\\1.1\\oshi-core-1.1.jar;${process.env.APPDATA}\\devpanda\\libraries\\net\\java\\dev\\jna\\jna\\4.4.0\\jna-4.4.0.jar;${process.env.APPDATA}\\devpanda\\libraries\\net\\java\\dev\\jna\\platform\\3.4.0\\platform-3.4.0.jar;${process.env.APPDATA}\\devpanda\\libraries\\com\\ibm\\icu\\icu4j-core-mojang\\51.2\\icu4j-core-mojang-51.2.jar;${process.env.APPDATA}\\devpanda\\libraries\\com\\mojang\\javabridge\\1.0.22\\javabridge-1.0.22.jar;${process.env.APPDATA}\\devpanda\\libraries\\net\\sf\\jopt-simple\\jopt-simple\\5.0.3\\jopt-simple-5.0.3.jar;${process.env.APPDATA}\\devpanda\\libraries\\io\\netty\\netty-all\\4.1.25.Final\\netty-all-4.1.25.Final.jar;${process.env.APPDATA}\\devpanda\\libraries\\com\\google\\guava\\guava\\21.0\\guava-21.0.jar;${process.env.APPDATA}\\devpanda\\libraries\\org\\apache\\commons\\commons-lang3\\3.5\\commons-lang3-3.5.jar;${process.env.APPDATA}\\devpanda\\libraries\\commons-io\\commons-io\\2.5\\commons-io-2.5.jar;${process.env.APPDATA}\\devpanda\\libraries\\commons-codec\\commons-codec\\1.10\\commons-codec-1.10.jar;${process.env.APPDATA}\\devpanda\\libraries\\net\\java\\jinput\\jinput\\2.0.5\\jinput-2.0.5.jar;${process.env.APPDATA}\\devpanda\\libraries\\net\\java\\jutils\\jutils\\1.0.0\\jutils-1.0.0.jar;${process.env.APPDATA}\\devpanda\\libraries\\com\\mojang\\brigadier\\1.0.17\\brigadier-1.0.17.jar;${process.env.APPDATA}\\devpanda\\libraries\\com\\mojang\\datafixerupper\\2.0.24\\datafixerupper-2.0.24.jar;${process.env.APPDATA}\\devpanda\\libraries\\com\\google\\code\\gson\\gson\\2.8.0\\gson-2.8.0.jar;${process.env.APPDATA}\\devpanda\\libraries\\com\\mojang\\authlib\\1.5.25\\authlib-1.5.25.jar;${process.env.APPDATA}\\devpanda\\libraries\\org\\apache\\commons\\commons-compress\\1.8.1\\commons-compress-1.8.1.jar;${process.env.APPDATA}\\devpanda\\libraries\\org\\apache\\httpcomponents\\httpclient\\4.3.3\\httpclient-4.3.3.jar;${process.env.APPDATA}\\devpanda\\libraries\\commons-logging\\commons-logging\\1.1.3\\commons-logging-1.1.3.jar;${process.env.APPDATA}\\devpanda\\libraries\\org\\apache\\httpcomponents\\httpcore\\4.3.2\\httpcore-4.3.2.jar;${process.env.APPDATA}\\devpanda\\libraries\\it\\unimi\\dsi\\fastutil\\8.2.1\\fastutil-8.2.1.jar;${process.env.APPDATA}\\devpanda\\libraries\\org\\apache\\logging\\log4j\\log4j-api\\2.8.1\\log4j-api-2.8.1.jar;${process.env.APPDATA}\\devpanda\\libraries\\org\\apache\\logging\\log4j\\log4j-core\\2.8.1\\log4j-core-2.8.1.jar;${process.env.APPDATA}\\devpanda\\libraries\\org\\lwjgl\\lwjgl\\3.2.2\\lwjgl-3.2.2.jar;${process.env.APPDATA}\\devpanda\\libraries\\org\\lwjgl\\lwjgl-jemalloc\\3.2.2\\lwjgl-jemalloc-3.2.2.jar;${process.env.APPDATA}\\devpanda\\libraries\\org\\lwjgl\\lwjgl-openal\\3.2.2\\lwjgl-openal-3.2.2.jar;${process.env.APPDATA}\\devpanda\\libraries\\org\\lwjgl\\lwjgl-opengl\\3.2.2\\lwjgl-opengl-3.2.2.jar;${process.env.APPDATA}\\devpanda\\libraries\\org\\lwjgl\\lwjgl-glfw\\3.2.2\\lwjgl-glfw-3.2.2.jar;${process.env.APPDATA}\\devpanda\\libraries\\org\\lwjgl\\lwjgl-stb\\3.2.2\\lwjgl-stb-3.2.2.jar;${process.env.APPDATA}\\devpanda\\libraries\\org\\lwjgl\\lwjgl-tinyfd\\3.2.2\\lwjgl-tinyfd-3.2.2.jar;${process.env.APPDATA}\\devpanda\\libraries\\com\\mojang\\text2speech\\1.11.3\\text2speech-1.11.3.jar;${process.env.APPDATA}\\devpanda\\instancebin\\minecraft.jar -Xms3584m -Xmx3584m -Dfml.core.libraries.mirror=http://mirror.technicpack.net/Technic/lib/fml/%s -Dminecraft.applet.TargetDirectory=${process.env.APPDATA}\\devpanda\\instance -Duser.language=en io.github.zekerzhayard.forgewrapper.installer.Main --launchTarget fmlclient --fml.forgeVersion 31.1.77 --fml.mcVersion 1.15.2 --fml.forgeGroup net.minecraftforge --fml.mcpVersion 20200414.225201 --username LightningIce9 --version 1.15.2-forge-31.1.77 --gameDir ${process.env.APPDATA}\\devpanda\\instance\\ --assetsDir ${process.env.APPDATA}\\devpanda\\assets\\ --assetIndex 1.15 --uuid 15a658d6084f48d2b606a6f34cb0db37 --accessToken redacted --userType mojang --versionType release --title Forge 1.15.2 - Slate --icon ${process.env.APPDATA}\\devpanda\\assets\\packs\\forge-1152-slate\\icon.png`;
    const atsume = require('./atsumeLib.js')
    const {
        exec
    } = require('child_process');
    let runner;

    // Load the DOM Elements.
    const playBtn = document.getElementById('playBtn2')
    const updateBtn = document.getElementById('update-btn')

    // Run the client system.
    playBtn.disabled = true;
    updateBtn.disabled = true;
    playBtn.innerHTML = 'Game is already running!';
    updateBtn.innerHTML = 'Not available to update!';
    const instance = exec(arguments, function (error, stdout, stderr) {
        if (error) {
            atsume.logger('ERROR', error.stack);
            atsume.logger(`ERROR`, 'Error code: ' + error.code);
            atsume.logger(`PROCESS`, 'Signal received: ' + error.signal);
        }
        atsume.logger(`PROCESS`, 'Instance: ' + stdout);
        atsume.logger(`ERROR`, 'Instance: ' + stderr);
    });

    instance.on('exit', function (code) {
        atsume.logger(`PROCESS`, 'Instance exited with exit code [' + code + ']');
        playBtn.disabled = false;
        updateBtn.disabled = false;
        playBtn.innerHTML = 'Play Velox Reloaded';
        updateBtn.innerHTML = 'Update Test';
    });
}

exports.createArguments = createArguments;
exports.runApplication = runApplication;