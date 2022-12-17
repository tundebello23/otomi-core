otomi template --log-level WARN > all.helmfile
cat all.yaml | ./split-to-files.sh out
