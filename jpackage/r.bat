@rem C:\jdk-17.0.7\bin\jpackage.exe --input jar --dest output --name metaheuristic --main-jar metaheuristic.jar --main-class metaheuristic.sandbox.Main --type app-image --java-options '-ea \'-Dfile.encoding=UTF-8\' -Dspring.profiles.active=dispatcher,processor,h2 -Dmh.home=C:\\mhbp_home --win-console'
@rem C:\jdk-17.0.7\bin\jpackage.exe --input jar --dest output --name metaheuristic --main-jar metaheuristic.jar --main-class org.springframework.boot.loader.JarLauncher --type app-image --java-options '--win-menu'
@rem C:\jdk-17.0.7\bin\jpackage.exe --verbose --input jar --dest output --name metaheuristic --main-jar metaheuristic.jar --main-class org.springframework.boot.loader.JarLauncher --type app-image --java-options '--win-console' --java-options -ea --java-options -Dfile.encoding=UTF-8 --java-options -Dspring.profiles.active=dispatcher,processor,h2 --java-options -Dmh.home=C:\\mhbp_home1
@rem C:\jdk-17.0.7\bin\jpackage.exe --verbose --input jar --dest output --name metaheuristic --main-jar metaheuristic.jar --main-class org.springframework.boot.loader.JarLauncher --type app-image 
C:\jdk-17.0.7\bin\jpackage.exe --verbose --input jar --dest output --name metaheuristic --main-jar metaheuristic.jar --main-class org.springframework.boot.loader.JarLauncher --type app-image --java-options -ea --java-options -Dfile.encoding=UTF-8 --java-options -Dspring.profiles.active=dispatcher,processor,h2,standalone