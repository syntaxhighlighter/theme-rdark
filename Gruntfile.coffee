module.exports = (grunt) ->
  grunt.loadNpmTasks 'grunt-contrib-sass'

  grunt.config.init
    sass:
      theme:
        options:
          loadPath: ["#{__dirname}/node_modules/theme-base/scss"]

        files: [
          expand: true
          cwd: 'scss'
          src: '**/*.scss'
          dest: 'css'
          ext: '.css'
        ]

  grunt.registerTask 'build', ['sass:theme']
