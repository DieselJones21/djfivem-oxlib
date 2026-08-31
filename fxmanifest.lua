fx_version 'cerulean'
use_experimental_fxv2_oal 'yes'
lua54 'yes'
games { 'rdr3', 'gta5' }
rdr3_warning 'I acknowledge that this is a prerelease build of RedM, and I am aware my resources *will* become incompatible once RedM ships.'

name 'ox_lib'
author 'Overextended / Envy restyle'
version '3.39.0'
license 'LGPL-3.0-or-later'
repository 'https://github.com/DieselJones21/djfivem-oxlib'
description 'ox_lib v3.39.0 with an Envy cyan-chrome UI restyle.'

dependencies {
    '/server:7290',
    '/onesync',
}

ui_page 'web/build/index.html'

files {
    'init.lua',
    'resource/settings.lua',
    'imports/**/client.lua',
    'imports/**/shared.lua',
    'web/build/index.html',
    'web/build/**/*',
    'locales/*.json',
}

shared_script 'resource/init.lua'

shared_scripts {
    'resource/**/shared.lua',
    -- 'resource/**/shared/*.lua'
}

client_scripts {
    'resource/**/client.lua',
    'resource/**/client/*.lua'
}

server_scripts {
    'imports/callback/server.lua',
    'imports/hook/shared.lua',
    'imports/registerHook/shared.lua',
    'imports/getFilesInDirectory/server.lua',
    'resource/**/server.lua',
    'resource/**/server/*.lua',
}
