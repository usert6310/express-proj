while getopts ":u:" opt; do
    case $opt in 
        u) url=$OPTARG 
    esac 
done

# Get file name and extension to be used in later checks
filename_and_extension=$(basename $url)
file_name="${filename_and_extension%.*}"
extension="${filename_and_extension##*.}"


# Check the file is of the type doc,md or txt. Exit code 1 if non supported file type is used
case $extension in
    doc | txt | md)
        timestamp=$(date +%s)
        name=$file_name
        contents="$(curl "$url")" 
        ;;
    *)
        echo "Non supported file type. Must be md/doc/txt"
        exit 1;;
esac


# Check filename to ensure no illegal characters have been included. Exit if true
filename_regex='^[a-zA-Z0-9_]*$'
if [[ $file_name =~ $filename_regex ]]
    then
        :
    else
        echo "Filename contains illegal characters"
        exit 1
fi

# Check if the file already exists. Exit with failure if true
if [ -f $filename.txt ]
then   
    echo "File already exists. Aborting"
    exit 1
fi


# Check length of file for download. If length == 0 do not download


# Download the file to the text_files directory
curl -o ./text_files/$file_name.txt $url > /dev/null 2>&1

