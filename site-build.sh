page_dir=./src/pages
output_dir=./src/content
if [ ! -d  $output_dir ]; then
    echo "Creating Content directory"
    mkdir $output_dir
fi

for entry in $page_dir/*; do

    file_name=${entry/".md"/".html"}
    html_file=${file_name/"pages"/"content"}
    echo "Converting $file_name"e
    npx markdown $entry --yes > $html_file     
done
