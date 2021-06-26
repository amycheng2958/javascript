module.exports = grunt =>{
    grunt.registerTask('foo',()=>{
        console.log('foo')
    })
    grunt.registerTask('default',[''])
    grunt.registerTask('yibu',function(){
        const done = this.async()
        setTimeout(()=>{
            console.log('这是异步')
            done()
        },2000)
    })
}