module.exports = function (grunt) {

  grunt.initConfig({
    ts: {
      default : {
        src: ["**/*.ts", "!node_modules/**/*.ts"]
      }
    }
  });

//add watch Etc tasks

  grunt.loadNpmTasks("grunt-ts");
  grunt.registerTask("default", ["ts"]);

};
