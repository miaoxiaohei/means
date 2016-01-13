!include "MUI2.nsh"

Name "means"
BrandingText "means.com"

# set the icon
!define MUI_ICON "icon.ico"

# define the resulting installer's name:
OutFile "..\..\dist\MeansSetup.exe"

# set the installation directory
InstallDir "$PROGRAMFILES\Means\"

# app dialogs
!insertmacro MUI_PAGE_WELCOME
!insertmacro MUI_PAGE_INSTFILES

!define MUI_FINISHPAGE_RUN_TEXT "Start Means"
!define MUI_FINISHPAGE_RUN "$INSTDIR\Means.exe"

!insertmacro MUI_PAGE_FINISH
!insertmacro MUI_LANGUAGE "English"

# default section start
Section

  # delete the installed files
  RMDir /r $INSTDIR

  # define the path to which the installer should install
  SetOutPath $INSTDIR

  # specify the files to go in the output path
  File /r ..\..\build\means-win32-x64\*

  # create the uninstaller
  WriteUninstaller "$INSTDIR\Uninstall Means.exe"

  # create shortcuts in the start menu and on the desktop
  CreateShortCut "$SMPROGRAMS\Means.lnk" "$INSTDIR\Means.exe"
  CreateShortCut "$SMPROGRAMS\Uninstall Means.lnk" "$INSTDIR\Uninstall Means.exe"
  CreateShortCut "$DESKTOP\Means.lnk" "$INSTDIR\Means.exe"

SectionEnd

# create a section to define what the uninstaller does
Section "Uninstall"

  # delete the installed files
  RMDir /r $INSTDIR

  # delete the shortcuts
  Delete "$SMPROGRAMS\Means.lnk"
  Delete "$SMPROGRAMS\Uninstall Means.lnk"
  Delete "$DESKTOP\Means.lnk"

SectionEnd
