from flask import Flask, request, render_template
import os 
import subprocess
import json

template_path = os.path.abspath('.')+'/html/'
print(template_path)
app = Flask(__name__,
        template_folder=template_path,
        static_folder=os.path.abspath('.'))

@app.route('/status', methods=['GET','POST'])
def control():
    if request.method == 'POST':
        out = subprocess.check_output("cconsumer/get_regs_info")
        return out

    if request.args.get("type") == "update": 
        with open("test2.json","r") as fo:
            rawdata = fo.read()
        return rawdata
    
    return render_template('status.html',title="Status")

if __name__ == '__main__':
    app.run(host="0.0.0.0", debug=True, port=5000)
